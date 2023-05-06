import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface RestaurantCardProps {}

const RestaurantCard: FC<RestaurantCardProps> = ({}) => {
  return (
    <div className="border-b flex pb-5">
      <Image
        src="https://resizer.otstatic.com/v2/photos/xlarge/1/52282273.jpg"
        width={150}
        height={150}
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">Asiana Restaurant Collective</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Toronto</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milestones-grill">View More Information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
