import React from 'react';
import './OrderCost.css';

interface OrderCostProps {
  totalCost: number;
}

const OrderCost: React.FC<OrderCostProps> = (props) => {
  return (
    <div className="order_cost_box">
      <span>Total: {props.totalCost}</span>
    </div>
  );
};

export default OrderCost;