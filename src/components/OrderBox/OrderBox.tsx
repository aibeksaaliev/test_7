import React from 'react';
import './OrderBox.css';
import OrderDetails from "../OrderDetails/OrderDetails";
import {OrderType} from "../../types";

interface OrderBoxProps {
  orderList: OrderType[];
  removeOrder: (name: string) => void;
}

const OrderBox: React.FC<OrderBoxProps> = (props) => {
  return (
    <div className="order_box">
      {props.orderList.map((position, index: number) => {
        if (position.amount > 0) {
          return (
            <OrderDetails
              key={index}
              orderPosition={position}
              onclick={() => {props.removeOrder(position.name)}}
            />
          )
        }
      })}
    </div>
  );
};

export default OrderBox;