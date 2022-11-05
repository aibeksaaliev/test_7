import React from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
  return (
    <div className="order_details_box">
      <div className="position_box">
        <span className="order_position">Name</span>
        <span className="position_amount">Amount</span>
        <span className="position_price">Price</span>
        <button className="remove_btn">Delete</button>
      </div>
      <div className="total_box">
        <span>Total price:</span>
        <span className="total_price">Total Price</span>
      </div>
    </div>
  );
};

export default OrderDetails;