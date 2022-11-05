import React, {useState} from 'react';
import './App.css';
import OrderBox from "../../components/OrderBox/OrderBox";
import {MenuPositionType} from "../../types";
import MenuWindow from "../../components/MenuWindow/MenuWindow";
import BigBasket from '../../assets/BusketL26.avif';
import MiddleBasket from '../../assets/Busket10.avif';
import HotBasket from '../../assets/BusketHot.avif';
import DuetBasket from '../../assets/BusketDuet.avif';
import FriesBasket from '../../assets/BusketFries.avif';
import FriesStandard from '../../assets/FriesStandart.avif';
import BurgerChef from '../../assets/BurgerChefTower.avif';
import BurgerSanders from '../../assets/BurgerSanders.avif';
import Twister from '../../assets/Twister.avif';
import ChickenPita from '../../assets/ChickenPita.avif';
import Pepsi from '../../assets/Pepsi.avif';
import Juice from '../../assets/Juice.avif';

const MENU: MenuPositionType [] = [
  {name: "Big Basket", price: 899, image: BigBasket, id: 125548},
  {name: "Middle Basket", price: 589, image: MiddleBasket, id: 179156},
  {name: "Hot Basket", price: 959, image: HotBasket, id: 745135},
  {name: "Duet Basket", price: 479, image: DuetBasket, id: 715687},
  {name: "Fries Basket", price: 309, image: FriesBasket, id: 189431},
  {name: "Fries Standard", price: 159, image: FriesStandard, id: 489713},
  {name: "Burger Chef", price: 189, image: BurgerChef, id: 489713},
  {name: "Burger Sanders", price: 199, image: BurgerSanders, id: 489713},
  {name: "Twister", price: 179, image: Twister, id: 489713},
  {name: "Chicken Pita", price: 159, image: ChickenPita, id: 489713},
  {name: "Pepsi", price: 99, image: Pepsi, id: 489713},
  {name: "Juice", price: 109, image: Juice, id: 489713}
];

function App() {
  const [order, setOrder] = useState([
    {name: "Big Basket", price: 899, amount: 0},
    {name: "Middle Basket", price: 589, amount: 0},
    {name: "Hot Basket", price: 959, amount: 0},
    {name: "Duet Basket", price: 479, amount: 0},
    {name: "Fries Basket", price: 309, amount: 0},
    {name: "Fries Standard", price: 159, amount: 0},
    {name: "Burger Chef", price: 189, amount: 0},
    {name: "Burger Sanders", price: 199, amount: 0},
    {name: "Twister", price: 179, amount: 0},
    {name: "Chicken Pita", price: 159, amount: 0},
    {name: "Pepsi", price: 99, amount: 0},
    {name: "Juice", price: 109, amount: 0}
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

  const getOrderCost = MENU.reduce((acc, position) => {
    order.forEach(orderPosition => {
      if (position.name === orderPosition.name) {
        return acc += (position.price * orderPosition.amount);
      }
    });
    return acc;
  }, 0);

  return (
    <div className="App">
      <OrderBox orderList={order} removeOrder={removeOrder} totalCost={getOrderCost}/>
      <MenuWindow menu={MENU} getOrder={getOrder}/>
    </div>
  );
}

export default App;
