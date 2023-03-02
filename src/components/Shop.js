import ShopItem from "./ShopItem";

const Shop = ({itemInfo, onQuantityDecrease, onQuantityIncrease, onQuantityChange, onAddToCart}) => {
  if(!itemInfo) return null;
  return (
    Object.values(itemInfo).map(item => (
      <ShopItem
        key={item.itemId}
        itemId={item.itemId}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        isInCart={item.isInCart}
        onQuantityDecrease={onQuantityDecrease}
        onQuantityIncrease={onQuantityIncrease}
        onQuantityChange={onQuantityChange}
        onAddToCart={onAddToCart}
      />
    ))
  )
}

export default Shop;