import { FC } from "react";
import Image from "next/image";
import { Review } from "@prisma/client";

import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";
import emptyStar from "../../public/icons/empty-star.png";
import { CalculateReviewAverage } from "../../utils/ReviewAverage";

interface StarsProps {
  reviews: Review[];
}

const Stars: FC<StarsProps> = ({ reviews }) => {
  const rating = CalculateReviewAverage(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1));

      if (difference >= 1) {
        stars.push(fullStar);
      } else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) {
          stars.push(emptyStar);
        } else if (difference > 0.2 && difference <= 0.6) {
          stars.push(halfStar);
        } else {
          stars.push(fullStar);
        }
      } else {
        stars.push(emptyStar);
      }
    }

    return stars.map((star, index) => (
      <Image
        key={index}
        src={star}
        alt=""
        width={100}
        height={100}
        className="w-4 h-4 mr-1"
      />
    ));
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default Stars;
