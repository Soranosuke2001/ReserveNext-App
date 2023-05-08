import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";
import Head from "./head";
import SearchBar from "../components/SearchBar";

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantsByCity = async (searchParams: SearchParams) => {
  const { city = null, cuisine = null, price = null } = searchParams;

  const where: any = {};

  if (city) {
    const searchLocation = {
      name: {
        equals: city.toLowerCase(),
      },
    };

    where.location = searchLocation;
  }

  if (cuisine) {
    const searchCuisine = {
      name: {
        equals: cuisine.toLowerCase(),
      },
    };

    where.cuisine = searchCuisine;
  }

  if (price) {
    const searchPrice = {
      equals: price,
    };

    where.price = searchPrice;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  const restaurants = prisma.restaurant.findMany({
    where,
    select,
  });

  return restaurants;
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Head />
      <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <SearchBar />
      </div>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p>There were no restaurants found...</p>
          )}
        </div>
      </div>
    </>
  );
}
