import { Cuisine, PRICE, Location } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Price from "../../components/Price";

interface RestaurantCardProps {
  restaurant: {
    id: number;
    name: string;
    main_image: string;
    price: PRICE;
    cuisine: Cuisine;
    location: Location;
    slug: string;
  };
}
const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant }) => {
  const { id, name, main_image, price, cuisine, location, slug } = restaurant;

  return (
    <div key={id} className="border-b flex pb-5 ml-4">
      <Image
        src={main_image}
        width={150}
        height={150}
        alt=""
        className="w-44 h-36 rounded object-cover"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex text-reg">
            <Price price={price} />
            <p className="mr-4 capitalize">{cuisine.name}</p>
            <p className="mr-4 capitalize">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View More Information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
