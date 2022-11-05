import React, {useState} from 'react';
import './App.css';
import OrderBox from "../../components/OrderBox/OrderBox";
import {MenuPositionType, OrderType} from "../../types";
import MenuWindow from "../../components/MenuWindow/MenuWindow";
import burgerImg from "../../assets/image_2022-11-03_15-23-34.png"
import hotDogImg from "../../assets/image_2022-11-05_14-23-01.png"
import tacoImg from "../../assets/image_2022-11-05_14-24-19.png"
import friesImg from "../../assets/image_2022-11-05_14-23-20.png"
import cokeImg from "../../assets/image_2022-11-05_14-23-40.png"
import juiceImg from "../../assets/image_2022-11-05_14-23-59.png"


const MENU: MenuPositionType [] = [
  {name: "Burger", price: 120, image: burgerImg, id: 125548},
  {name: "Hot-Dog", price: 150, image: hotDogImg, id: 179156},
  {name: "Taco", price: 30, image: tacoImg, id: 745135},
  {name: "Fries", price: 90, image: friesImg, id: 715687},
  {name: "Coke", price: 70, image: cokeImg, id: 189431},
  {name: "Juice", price: 80, image: juiceImg, id: 489713}
];

function App() {
  const [order, setOrder] = useState([
    {name: "Burger", amount: 0, price: 120},
    {name: "Hot-Dog", amount: 0, price: 150},
    {name: "Taco", amount: 0, price: 30},
    {name: "Fries", amount: 0, price: 90},
    {name: "Coke", amount: 0, price: 70},
    {name: "Juice", amount: 0, price: 80}
  ]);

  const getOrder = (name: string) => {
    setOrder(prevState => prevState.map(position => {
      return name === position.name ? {
        ...position,
        amount: position.amount + 1,
      } : position;
    }));
  };

  const removeOrder = (name: string) => {
    setOrder(prevState => prevState.map(position => {
      return name === position.name ? {
        ...position,
        amount: position.amount = 0,
      } : position;
    }));
  };





  return (
    <div className="App">
      <OrderBox orderList={order} removeOrder={removeOrder}/>
      <MenuWindow menu={MENU} getOrder={getOrder}/>
    </div>
  );
}

export default App;
