"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const searchSubmitHandler = () => {
    if (location === "") return;

    router.push(`/search?city=${location}`);
    setLocation("");
  };

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, City or Town"
        value={location}
        onChange={(e) => setLocation(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchSubmitHandler();
        }}
      />
      <button
        className=" rounded bg-red-600 px-9 py-2 text-white"
        onClick={() => searchSubmitHandler()}
      >
        Let&apos;s Go
      </button>
    </div>
  );
};

export default SearchBar;
