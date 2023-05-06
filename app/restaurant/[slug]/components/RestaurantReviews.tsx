import { FC } from "react";

interface RestaurantReviewsProps {}

const RestaurantReviews: FC<RestaurantReviewsProps> = ({}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What 100 People are saying
      </h1>
      <div>
        <div className="border-b pb-7 mb-7">
          <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                <h2 className="text-white text-2xl">MJ</h2>
              </div>
              <p className="text-center">Michael Jordan</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="flex mr-5">*****</div>
              </div>
              <div className="mt-5">
                <div className="text-lg font-light">
                  Laurie was on top of everything! Slow night due to the snow
                  storm so it worked in our favour to have more one on one with
                  the staff. Delicious nad well worth the money.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviews;
