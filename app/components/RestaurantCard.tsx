import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { RestaurantCardType } from "../page";
import Price from "./Price";
import Stars from "./Stars";

interface RestaurantCardProps {
  restaurant: RestaurantCardType;
}

const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant }) => {
  const { id, name, main_image, cuisine, location, price, slug, reviews } =
    restaurant;
  return (
    <div
      key={id}
      className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
    >
      <Link href={`/restaurant/${slug}`}>
        <Image
          src={main_image}
          width={400}
          height={400}
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2 text-black">{name}</h3>
          <div className="flex items-start">
            <Stars reviews={reviews} />
            {/* <div className="flex mb-2"></div> */}
            {reviews.length === 0 ? (
              <p className="ml-2">No Reviews</p>
            ) : (
              <p className="ml-2">{reviews.length} Review(s)</p>
            )}
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3">{cuisine.name}</p>
            <Price price={price} />
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
