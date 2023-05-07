import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import Head from "./head";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (city: string | undefined) => {
  if (!city) return prisma.restaurant.findMany();

  const restaurants = prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
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
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
