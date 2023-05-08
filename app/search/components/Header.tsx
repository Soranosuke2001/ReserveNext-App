import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input
          className="rounded mr-3 p-2 w-[450px]"
          type="text"
          placeholder="State, City or Town"
        />
        <button className=" rounded bg-red-600 px-9 py-2 text-white">
          Let&apos;s Go
        </button>
      </div>
    </div>
  );
};

export default Header;
