import ShopItem from "./ShopItem";

const Shop = ({items, itemInfo, onQuantityDecrease, onQuantityIncrease, onQuantityChange, onAddToCart}) => {
  if(!itemInfo) return null;
  return (
    items.map(item => (
      <ShopItem
        key={item.id}
        itemId={item.id}
        name={item.name}
        price={item.price}
        quantity={itemInfo[item.id].quantity}
        isInCart={itemInfo[item.id].isInCart}
        onQuantityDecrease={onQuantityDecrease}
        onQuantityIncrease={onQuantityIncrease}
        onQuantityChange={onQuantityChange}
        onAddToCart={onAddToCart}
      />
    ))
  )
}

export default Shop;