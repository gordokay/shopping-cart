const QuantityWidget = ({isInCart, itemId, value, onQuantityDecrease, onQuantityIncrease, onQuantityChange}) => {
  return (
    <div className="quantity-widget">
      <fieldset>
        <legend>Quantity</legend>
        <button id={`${itemId}-decrease`} onClick={onQuantityDecrease} disabled={isInCart}>-</button>
        <input value={value} type="number" id={`${itemId}-quantity`} name={`${itemId}-quantity`} onChange={onQuantityChange} disabled={isInCart}/>
        <button id={`${itemId}-increase`} onClick={onQuantityIncrease} disabled={isInCart}>+</button>
      </fieldset>
    </div>
  )
}

export default QuantityWidget;