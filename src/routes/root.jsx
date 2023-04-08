import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/Root.css";

const Root = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <nav>
        <NavLink
          id="home-link"
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          id="shop-link"
          className={({ isActive }) => (isActive ? "active" : "")}
          to="shop"
        >
          Shop
        </NavLink>
        <NavLink
          id="cart-link"
          className={({ isActive }) => (isActive ? "active" : "")}
          to="cart"
        >
          <p>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartItems.length}
          </p>
        </NavLink>
      </nav>
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
};

export default Root;
