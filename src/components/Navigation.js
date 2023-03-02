import '../styles/Navigation.css';

import { NavLink } from "react-router-dom";

const Navigation = ({quantity}) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart"><span className="cart-notification">{quantity}</span>Cart</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;