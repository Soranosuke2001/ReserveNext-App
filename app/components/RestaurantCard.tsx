import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Restaurant } from "@prisma/client";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/milestones-grill">
        <Image src="" alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2 text-black">
            Milestones Grill
          </h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">112 Reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
