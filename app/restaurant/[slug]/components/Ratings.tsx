import { Review } from "@prisma/client";
import { FC } from "react";
import { CalculateReviewAverage } from "../../../../utils/ReviewAverage";
import Stars from "../../../components/Stars";

interface RatingsProps {
  reviews: Review[];
}

const Ratings: FC<RatingsProps> = ({ reviews }) => {
  return (
    <div className="flex items-end">
      <div className="mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">{CalculateReviewAverage(reviews).toFixed(2)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} {reviews.length === 0 ? "No Ratings" : "Review(s)"}
        </p>
      </div>
    </div>
  );
};

export default Ratings;
