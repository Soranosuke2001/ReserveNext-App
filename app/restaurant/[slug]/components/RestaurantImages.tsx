import { FC } from "react";

import Image from "next/image";

interface RestaurantImagesProps {}

const RestaurantImages: FC<RestaurantImagesProps> = ({}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">10 Photos</h1>
      <div className="flex flex-wrap">
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
      </div>
    </div>
  );
};

export default RestaurantImages;
