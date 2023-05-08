import { Review } from "@prisma/client";
import { FC } from "react";
import ReviewCard from "./ReviewCard";

interface RestaurantReviewsProps {
  reviews: Review[];
}

const RestaurantReviews: FC<RestaurantReviewsProps> = ({ reviews }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What {reviews.length} {reviews.length === 1 ? "person" : "people"} are
        saying
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantReviews;
