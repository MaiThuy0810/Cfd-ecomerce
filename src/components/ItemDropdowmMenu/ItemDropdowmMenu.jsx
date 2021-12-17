import React from "react";
import "./ItemDropdowmMenu.scss";
import { IconArrowDown } from "../Icons/icon";

function ItemDropdowmMenu({ nameItem }) {
  return (
    <div className="ItemDropdowmMenu">
      <h4>{nameItem}</h4>
      <IconArrowDown />
    </div>
  );
}

export default ItemDropdowmMenu;
