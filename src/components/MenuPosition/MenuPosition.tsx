import React from 'react';
import './MenuPosition.css';
import {MenuPositionType} from "../../types";

interface MenuPositionProps {
  position: MenuPositionType;
  onclick: React.MouseEventHandler;
}

const MenuPosition: React.FC<MenuPositionProps> = (props) => {
  return (
    <div className="menu_position_box" onClick={props.onclick}>
      <div className="position_img">
        <img src={props.position.image} alt=""/>
      </div>
      <span>{props.position.name}</span>
      <span>{props.position.price} сом</span>
    </div>
  );
};

export default MenuPosition;