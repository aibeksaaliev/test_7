import React from 'react';
import './MenuWindow.css';
import MenuPosition from "../MenuPosition/MenuPosition";
import {MenuPositionType} from "../../types";

interface MenuWindowProps {
  menu: MenuPositionType[];
  getOrder: (name: string) => void;
}

const MenuWindow: React.FC<MenuWindowProps> = (props) => {
  const getMenu = props.menu.map(position => {
    return (
      <MenuPosition
        position={position}
        key={position.id}
        onclick={() => {props.getOrder(position.name)}}
      />
    )
  })

  return (
    <div className="menu">
      {getMenu}
    </div>
  );
};

export default MenuWindow;