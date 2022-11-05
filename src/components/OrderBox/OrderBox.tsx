import React from 'react';
import './OrderBox.css';
import OrderDetails from "../OrderDetails/OrderDetails";

const OrderBox = () => {
  return (
    <div className="order_box">
      <OrderDetails/>
    </div>
  );
};

export default OrderBox;