import React from 'react';
import './MenuWindow.css';
import MenuPosition from "../MenuPosition/MenuPosition";
import {MenuPositionType} from "../../types";

interface MenuWindowProps {
  menu: MenuPositionType[];
}
const MenuWindow: React.FC<MenuWindowProps> = (props) => {
  const getMenu = props.menu.map(position => {
    return (
      <MenuPosition
        position={position}
        key={position.id}
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