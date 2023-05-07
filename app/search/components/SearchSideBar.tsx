import { FC } from "react";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

interface SearchSideBarProps {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: {
    city?: string;
    cuisine?: string;
    price?: PRICE;
  };
}

const SearchSideBar: FC<SearchSideBarProps> = ({
  locations,
  cuisines,
  searchParams,
}) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Regions</h1>
        {locations.map((region) => (
          <Link
            key={region.id}
            className="capitalize font-light text-reg"
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: region.name,
              },
            }}
          >
            {region.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            key={cuisine.id}
            className="capitalize font-light text-reg"
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.CHEAP,
              },
            }}
            className="border w-full text-reg font-light rounded-l p-2 text-center"
          >
            $
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.REGULAR,
              },
            }}
            className="border-r border-t border-b w-full text-reg font-light p-2 text-center"
          >
            $$
          </Link>
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.EXPENSIVE,
              },
            }}
            className="border-r border-t border-b w-full text-reg font-light rounded-r p-2 text-center"
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
