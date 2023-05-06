import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Ratings from "./components/Ratings";
import Description from "./components/Description";
import RestaurantImages from "./components/RestaurantImages";
import RestaurantReviews from "./components/RestaurantReviews";
import Reservation from "./components/Reservation";

export default function RestaurantDetails() {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Title />
          <Ratings />
          <Description />
          <RestaurantImages />
          <RestaurantReviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <Reservation />
        </div>
      </div>
    </>
  );
}
