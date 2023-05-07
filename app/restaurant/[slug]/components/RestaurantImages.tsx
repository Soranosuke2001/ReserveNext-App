import { FC } from "react";

import Image from "next/image";

interface RestaurantImagesProps {
  images: string[];
}

const RestaurantImages: FC<RestaurantImagesProps> = ({ images }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length === 1 ? "1 Photo" : `${images.length} Photos`}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            width={500}
            height={500}
            alt=""
            className="w-56 h-44 mr-1 mb-1"
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantImages;
