import React from 'react';
import './OrderBox.css';
import OrderDetails from "../OrderDetails/OrderDetails";
import {OrderType} from "../../types";
import OrderCost from "../OrderCost/OrderCost";

interface OrderBoxProps {
  orderList: OrderType[];
  removeOrder: (name: string) => void;
  totalCost: number;
}

const OrderBox: React.FC<OrderBoxProps> = (props) => {

  const getOrderDetails = props.orderList.map((position, index: number) => {
      if (position.amount > 0) {
        return (
          <OrderDetails
            key={index}
            orderPosition={position}
            onclick={() => {props.removeOrder(position.name)}}
          />
        )
      } else {
        return null;
      }
    });

  return (
    <div className="order_box">
      <div className="order_description">
        <span className="order_name">Name:</span>
        <span>Amount:</span>
        <span>Price:</span>
      </div>
      {getOrderDetails}
      <OrderCost totalCost={props.totalCost}/>
    </div>
  );
};

export default OrderBox;