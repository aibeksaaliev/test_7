import React from 'react';
import './OrderDetails.css';
import {OrderType} from "../../types";

interface OrderDetailsProps {
  orderPosition: OrderType;
  onclick: React.MouseEventHandler;
}

const OrderDetails: React.FC<OrderDetailsProps> = (props) => {
  return (
    <div className="order_details_box">
      <div className="position_box">
        <span className="order_position">{props.orderPosition.name}</span>
        <span className="position_amount">{props.orderPosition.amount}</span>
        <span className="position_price">{props.orderPosition.price}</span>
        <button className="remove_btn" onClick={props.onclick}>Delete</button>
      </div>
    </div>
  );
};

export default OrderDetails;