import { Inter } from "@next/font/google";
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
        <main>
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}
