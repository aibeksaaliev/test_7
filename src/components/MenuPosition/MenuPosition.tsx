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
      <span className="menu_position_name">{props.position.name}</span>
      <span className="menu_position_price">{props.position.price} KGS</span>
    </div>
  );
};

export default MenuPosition;