import React from 'react';
import './OrderDetails.css';
import {OrderType} from "../../types";

interface OrderDetailsProps {
  orderPosition: OrderType;
  onclick: React.MouseEventHandler;
}

const OrderDetails: React.FC<OrderDetailsProps> = (props) => {
  return (
    <div className="position_box">
      <span className="position_name">{props.orderPosition.name}</span>
      <span className="position_amount">x{props.orderPosition.amount}</span>
      <span className="position_price">{props.orderPosition.price}</span>
      <button className="remove_btn" onClick={props.onclick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(214, 35, 0)"
             className="bi bi-x-square-fill" viewBox="0 0 16 16">
          <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg></button>
    </div>
  );
};

export default OrderDetails;