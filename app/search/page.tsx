import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import Head from "./head";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });

  const restaurants = prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });

  return restaurants;
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const { city } = searchParams;
  const restaurants = await fetchRestaurantsByCity(city);

  return (
    <>
      <Head />
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length ? (
            <RestaurantCard />
          ) : (
            <p>There were no restaurants found...</p>
          )}
        </div>
      </div>
    </>
  );
}
