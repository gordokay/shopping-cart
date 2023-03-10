import QuantityWidget from "./QuantityWidget";
import "../styles/ShopItem.css";
import usd from "../util/currencyFormatter";

const ShopItem = ({
  itemId,
  name,
  price,
  quantity,
  isInCart,
  onQuantityDecrease,
  onQuantityIncrease,
  onQuantityChange,
  onAddToCart,
}) => {
  const style = {
    backgroundColor: itemId,
  };
  return (
    <div className="shop-item">
      <p>{name}</p>
      <div className="shop-item-image" style={style} />
      <p className="shop-item-price">{usd.format(price)}</p>
      <QuantityWidget
        isInCart={isInCart}
        itemId={itemId}
        value={quantity}
        onQuantityDecrease={onQuantityDecrease}
        onQuantityIncrease={onQuantityIncrease}
        onQuantityChange={onQuantityChange}
      />
      <button id={`${itemId}-add`} onClick={onAddToCart} disabled={isInCart}>
        {isInCart ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ShopItem;
