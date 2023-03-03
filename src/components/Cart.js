import "../styles/Cart.css";
import usd from "../util/currencyFormatter";

import CartItem from "./CartItem";

const Cart = ({ items, total, onRemoveFromCart }) => {
  return (
    <section className="cart">
      {items.map((item) => (
        <CartItem
          key={item.itemId}
          itemId={item.itemId}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
      <div className="total">
        <p>
          <span>Total</span> {usd.format(total)}
        </p>
      </div>
      <button>Checkout</button>
    </section>
  );
};

export default Cart;
