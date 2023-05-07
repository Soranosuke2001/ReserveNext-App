import { Item } from "@prisma/client";
import { FC } from "react";

interface MenuCardProps {
  item: Item;
}

const MenuCard: FC<MenuCardProps> = ({ item }) => {
  const { id, name, description, price } = item;
  return (
    <div key={id} className="border rounded p-3 w-[49%] mb-3">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="font-light mt-1 text-sm">{description}</p>
      <p className="mt-7">{price}</p>
    </div>
  );
};

export default MenuCard;
