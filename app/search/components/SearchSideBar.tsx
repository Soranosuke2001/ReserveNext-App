import { FC } from "react";
import { Cuisine, Location } from "@prisma/client";

interface SearchSideBarProps {
  locations: Location[];
  cuisines: Cuisine[];
}

const SearchSideBar: FC<SearchSideBarProps> = ({ locations, cuisines }) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Regions</h1>
        {locations.map((region) => (
          <p key={region.id} className="capitalize font-light text-reg">
            {region.name}
          </p>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p key={cuisine.id} className="capitalize font-light text-reg">
            {cuisine.name}
          </p>
        ))}
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
  );
};

export default SearchSideBar;
