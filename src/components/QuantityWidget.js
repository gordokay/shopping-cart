import '../styles/QuantityWidget.css'

const QuantityWidget = ({isInCart, itemId, value, onQuantityDecrease, onQuantityIncrease, onQuantityChange}) => {
  return (
    <div className="quantity-widget">
      <fieldset>
        <legend>Quantity</legend>
        <div className="quantity-widget-controls">
          <button id={`${itemId}-decrease`} className="quantity-decrease" onClick={onQuantityDecrease} disabled={isInCart}>-</button>
          <input value={value} type="tel" id={`${itemId}-quantity`} name={`${itemId}-quantity`} onChange={onQuantityChange} disabled={isInCart}/>
          <button id={`${itemId}-increase`} className="quantity-increase" onClick={onQuantityIncrease} disabled={isInCart}>+</button>
        </div>
      </fieldset>
    </div>
  )
}

export default QuantityWidget;