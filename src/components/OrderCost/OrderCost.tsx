import React from 'react';
import './OrderCost.css';

interface OrderCostProps {
  totalCost: number;
}

const OrderCost: React.FC<OrderCostProps> = (props) => {

  const orderInfo = props.totalCost === 0 ? "Order is empty" : `Total: ${props.totalCost} KGS`;

  return (
    <div className="order_cost_box">
      <span>{orderInfo}</span>
    </div>
  );
};

export default OrderCost;