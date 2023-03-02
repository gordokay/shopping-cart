import CartItem from "./CartItem";

const Cart = ({items, total, onRemoveFromCart}) => {
  return (
    <>
      {
        items.map(item => 
          <CartItem key={item.itemId} itemId={item.itemId} name={item.name} quantity={item.quantity} price={item.price} onRemoveFromCart={onRemoveFromCart}/>
        )
      }
      <p><span>Total</span> {total}</p>
      <button>Checkout</button>
    </>
  )
}

export default Cart;