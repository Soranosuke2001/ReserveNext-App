import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";

export default function Reservation() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            {/* Form Component */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Last Name"
              />
              <input
                type="number"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Phone Number"
              />
              <input
                type="email"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Occasion (Optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Special Requests (Optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete Reservation
              </button>
              <p className="mt-4 text-small">
                By clicking "Complete Reservation" you agree to the OpenTable
                Terms of Use and Privacy Policy. Standard text messages rate may
                apply. You may opt out of receiving text messages at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
