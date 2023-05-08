"use client";

import Image from "next/image";
import { FC } from "react";

import errorIcon from "../../public/icons/error.png";

interface errorProps {
  error: Error;
}

const error: FC<errorProps> = ({ error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <div className="bg-white px-9 py-14 shadow rounded">
        <div className='flex w-full justify-center'>
          <Image
            src={errorIcon}
            alt="error"
            width={600}
            height={600}
            className="w-56 mb-8"
          />
        </div>
        <h3 className="text-3xl font-bold">Oops... Something Went Wrong!</h3>
        <p className="text-reg font-bold">An Error Occurred</p>
        <p className="mt-6 text-sm font-light">Error Code: 400</p>
        <p className="mt-6 text-sm font-light">{error.message}</p>
      </div>
    </div>
  );
};

export default error;
