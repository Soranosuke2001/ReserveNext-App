import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />

        {/* Restaurant Description Component */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milestone Grill</h1>
            </div>
            <div className="flex items-end">
              <div className="mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-lg text-light">
                The classics you love prepared with a perfect twist, all served
                up in an atmosphere that feels just right. That's the Milestones
                promise. So, whether you're celebrating a milestone, making the
                most of Happy Hour, or enjoying brunch with friends, you can be
                sure that every Milestones experience is a simple and perfectly
                memorable one.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                10 Photos
              </h1>
              <div className="flex flex-wrap">
                <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
                <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
                <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
                <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
                <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
              </div>
            </div>

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
                          Laurie was on top of everything! Slow night due to the
                          snow storm so it worked in our favour to have more one
                          on one with the staff. Delicious nad well worth the
                          money.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reservation Component */}
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party Size</label>
                <select name="" className="py-3 border-b font-light" id="">
                  <option value="">1 Person</option>
                  <option value="">2 People</option>
                  <option value="">3 People</option>
                  <option value="">4 People</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" className="py-3 border-b font-light" id="">
                    <option value="">7:30 AM</option>
                    <option value="">8:30 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
