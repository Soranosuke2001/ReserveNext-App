import { FC } from "react";

interface SearchSideBarProps {}

const SearchSideBar: FC<SearchSideBarProps> = ({}) => {
  return (
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
  );
};

export default SearchSideBar;
