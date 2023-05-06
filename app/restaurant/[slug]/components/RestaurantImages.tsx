import { FC } from "react";

import Image from "next/image";

interface RestaurantImagesProps {}

const RestaurantImages: FC<RestaurantImagesProps> = ({}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">4 Photos</h1>
      <div className="flex flex-wrap">
        <Image
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/52282272.jpg"
          width={500}
          height={500}
          alt=""
          className="w-56 h-44 mr-1 mb-1"
        />
        <Image
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/52282269.jpg"
          alt=""
          width={500}
          height={500}
          className="w-56 h-44 mr-1 mb-1"
        />
        <Image
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/52282270.jpg"
          alt=""
          width={500}
          height={500}
          className="w-56 h-44 mr-1 mb-1"
        />
        <Image
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/52282273.jpg"
          alt=""
          width={500}
          height={500}
          className="w-56 h-44 mr-1 mb-1"
        />
      </div>
    </div>
  );
};

export default RestaurantImages;
