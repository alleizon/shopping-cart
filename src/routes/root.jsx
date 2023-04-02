import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";
import "../css/Root.css";

const Root = () => (
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
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
    </nav>
    <Outlet />
  </>
);

export default Root;
