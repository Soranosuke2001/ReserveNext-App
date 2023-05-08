import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReviews from "./components/RestaurantReviews";
import Reservation from "./components/Reservation";
import Head from "./head";
import { PrismaClient, Review } from "@prisma/client";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });

  if (!restaurant) throw new Error();

  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  const { id, name, images, description, slug, reviews } = restaurant;
  return (
    <>
      <Head />
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={slug} />
        <Title name={name} />
        <Ratings reviews={reviews} />
        <Description description={description} />
        <RestaurantImages images={images} />
        <RestaurantReviews reviews={reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <Reservation />
      </div>
    </>
  );
}
