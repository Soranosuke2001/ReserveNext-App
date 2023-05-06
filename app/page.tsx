import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* Navbar Component */}
        <nav className="bg-white p-2 flex justify-between">
          <Link href="" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </Link>
          <div className="flex">
            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
              Sign In
            </button>
            <button className="border p-1 px-4 rounded text-black">
              Sign Up
            </button>
          </div>
        </nav>
        {/* Header Component */}
        <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
          {/* Search Bar Component */}
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="rounded mr-3 p-2 w-[450px]"
              type="text"
              placeholder="State, City or Town"
            />
            <button className=" rounded bg-red-600 px-9 py-2 text-white">
              Let's Go
            </button>
          </div>
        </div>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Regions</h1>
              <p className="font-light text-reg">Toronto</p>
              <p className="font-light text-reg">Ottowa</p>
              <p className="font-light text-reg">Vancouver</p>
              <p className="font-light text-reg">Calgary</p>
              <p className="font-light text-reg">Kingston</p>
              <p className="font-light text-reg">Niagra</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2">Cuisine</h1>
              <p className="font-light text-reg">Mexican</p>
              <p className="font-light text-reg">Italian</p>
              <p className="font-light text-reg">Chinese</p>
              <p className="font-light text-reg">Japanese</p>
              <p className="font-light text-reg">Korean</p>
            </div>
            <div className="mt-3 pb-4">
              <h1 className="mb-2">Price</h1>
              <div className="flex">
                <button className="border w-full text-reg font-light rounded-l p-2">
                  $
                </button>
                <button className="border-r border-t border-b w-full text-reg font-light p-2">
                  $$
                </button>
                <button className="border-r border-t border-b w-full text-reg font-light rounded-r p-2">
                  $$$
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
