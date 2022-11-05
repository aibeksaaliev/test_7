import React from 'react';
import './MenuPosition.css';
import {MenuPositionType} from "../../types";

interface MenuPositionProps {
  position: MenuPositionType;
}

const MenuPosition: React.FC<MenuPositionProps> = (props) => {
  return (
    <div className="menu_position_box">
      <img src={props.position.image} alt=""/>
      <span>{props.position.name}</span>
      <span>{props.position.price}</span>
    </div>
  );
};

export default MenuPosition;