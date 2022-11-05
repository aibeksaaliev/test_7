import React from 'react';
import './App.css';
import OrderBox from "../../components/OrderBox/OrderBox";
import {MenuPosition} from "../../types";
import MenuWindow from "../../components/MenuWindow/MenuWindow";

const MENU: MenuPosition [] = [
  {name: "Hamburger", price: 120, image: "", id: 125548},
  {name: "Cheeseburger", price: 150, image: "", id: 179156},
  {name: "Tea", price: 30, image: "", id: 745135},
  {name: "Coffee", price: 90, image: "", id: 715687},
  {name: "Juice", price: 70, image: "", id: 189431},
  {name: "Fries", price: 80, image: "", id: 489713}
];

function App() {
  return (
    <div className="App">
      <OrderBox/>
      <MenuWindow/>
    </div>
  );
}

export default App;
