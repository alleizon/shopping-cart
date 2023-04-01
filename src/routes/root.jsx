import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import "../css/Root.css";

const Root = () => (
    <>
      <nav>
        <Link id="home-link" to="/">
          Home
        </Link>
        <Link id="shop-link" to="shop">
          Shop
        </Link>
        <Link id="cart-link" to="cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </nav>
      <Outlet />
    </>
  );

export default Root;
