import Link from "next/link";
import { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div className="flex">
        <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
          Sign In
        </button>
        <button className="border p-1 px-4 rounded text-black">Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;
