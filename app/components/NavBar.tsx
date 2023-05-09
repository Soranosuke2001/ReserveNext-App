import { FC } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div className="flex">
        <AuthModal isSignIn={true} />
        <AuthModal isSignIn={false} />
      </div>
    </nav>
  );
};

export default NavBar;
