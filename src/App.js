import "./styles/App.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import items from "./items";

function App() {
  const [itemInfo, setItemInfo] = useState(null);
  const [cartInfo, setCartInfo] = useState({
    cartItems: [],
    total: 0,
    quantity: 0,
  });

  useEffect(() => {
    const shopItems = {};
    items.forEach((item) => {
      shopItems[item.id] = {
        itemId: item.id,
        quantity: 0,
        isInCart: false,
        name: item.name,
        price: item.price,
      };
    });
    setItemInfo(shopItems);
  }, []);

  const getItemId = (elementId) => elementId.match(/^[^-]*/)[0];

  const handleQuantityDecrease = (e) => {
    const id = getItemId(e.target.id);
    setItemInfo((lastItemInfo) => {
      if (lastItemInfo[id].quantity > 0) {
        const updatedItemInfo = {
          ...lastItemInfo[id],
          quantity: lastItemInfo[id].quantity - 1,
        };
        return { ...lastItemInfo, [id]: updatedItemInfo };
      } else {
        return lastItemInfo;
      }
    });
  };

  const handleQuantityIncrease = (e) => {
    const id = getItemId(e.target.id);
    setItemInfo((lastItemInfo) => {
      const updatedItemInfo = {
        ...lastItemInfo[id],
        quantity: lastItemInfo[id].quantity + 1,
      };
      return { ...lastItemInfo, [id]: updatedItemInfo };
    });
  };

  const handleQuantityChange = (e) => {
    const id = getItemId(e.target.id);
    const updatedItemInfo = {
      ...itemInfo[id],
      quantity: +e.target.value > 0 ? +e.target.value : 0,
    };
    setItemInfo({ ...itemInfo, [id]: updatedItemInfo });
  };

  const handleAddToCart = (e) => {
    const id = getItemId(e.target.id);
    const newCartItem = {
      itemId: id,
      name: itemInfo[id].name,
      quantity: itemInfo[id].quantity,
      price: itemInfo[id].price,
    };
    setCartInfo((lastCartInfo) => {
      return {
        cartItems: lastCartInfo.cartItems.concat(newCartItem),
        total: lastCartInfo.total + newCartItem.quantity * newCartItem.price,
        quantity: lastCartInfo.quantity + newCartItem.quantity,
      };
    });
    const updatedItemInfo = {
      ...itemInfo[id],
      isInCart: true,
    };
    setItemInfo({ ...itemInfo, [id]: updatedItemInfo });
  };

  const handleRemoveFromCart = (e) => {
    const id = getItemId(e.target.id);
    setCartInfo((lastCartInfo) => {
      const cartItemToRemove = lastCartInfo.cartItems.find(
        (c) => c.itemId === id
      );
      const updatedCartItems = lastCartInfo.cartItems.filter(
        (c) => c.itemId !== id
      );
      const newTotal =
        lastCartInfo.total - cartItemToRemove.quantity * cartItemToRemove.price;
      const newQuantity = lastCartInfo.quantity - cartItemToRemove.quantity;
      return {
        cartItems: updatedCartItems,
        total: newTotal,
        quantity: newQuantity,
      };
    });
    const updatedItemInfo = {
      ...itemInfo[id],
      quantity: 0,
      isInCart: false,
    };
    setItemInfo({ ...itemInfo, [id]: updatedItemInfo });
  };

  return (
    <BrowserRouter>
      <Navigation quantity={cartInfo.quantity} />
      <Routes>
        <Route
          path="/"
          element={
            <Shop
              itemInfo={itemInfo}
              onQuantityDecrease={handleQuantityDecrease}
              onQuantityIncrease={handleQuantityIncrease}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={cartInfo.cartItems}
              total={cartInfo.total}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
