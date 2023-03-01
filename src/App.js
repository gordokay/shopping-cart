import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import items from './items';

function App() {
  const [itemInfo, setItemInfo] = useState({});
  const [cartInfo, setCartInfo] = useState({
    cartItems: [],
    total: 0
  });

  useEffect(() => {
    const shopItems = {};
    items.forEach(item => {
      shopItems[item.id] = {
        quantity: 0,
        price: item.price
      }
    })
    setItemInfo(shopItems);
  }, [])
  
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
