import "../styles/CartItem.css";
import usd from "../util/currencyFormatter";

const CartItem = ({ itemId, name, quantity, price, onRemoveFromCart }) => {
  const style = {
    backgroundColor: itemId,
  };
  return (
    <div className="cart-item">
      <div className="cart-item-image" style={style} />
      <p className="cart-item-name">{name}</p>
      <p className="cart-item-quantity">x{quantity}</p>
      <p className="cart-item-price">{usd.format(price * quantity)}</p>
      <button onClick={onRemoveFromCart} id={`${itemId}-remove`}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
