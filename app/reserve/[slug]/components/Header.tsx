import Image from "next/image";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div>
      <h3 className="font-bold">You&apos;re Almost Done!</h3>
      <div className="mt-5 flex">
        <Image
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/52282273.jpg"
          width={300}
          height={300}
          alt=""
          className="w-32 h-18 rounded"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">Asiana Restaurant Collective</h1>
          <div className="flex mt-3">
            <p className="mr-6">Tues, 22, 2023</p>
            <p className="mr-6">7:30 PM</p>
            <p className="mr-6">3 People</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
