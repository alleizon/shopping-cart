import "../css/Cart/Cart.css";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext();
  const [total, setTotal] = useState(null);
  const navigate = useNavigate();

  const handleRemoveItem = (item) => {
    const newCart = cartItems.slice();
    const idx = cartItems.findIndex((game) => game.id === item.id);
    newCart.splice(idx, 1);
    setCartItems(newCart);
  };

  const handleCheckout = () => {
    setCartItems([]);
    navigate("/");
  };

  useEffect(() => {
    if (cartItems.length) {
      const t = cartItems.reduce((sum, current) => sum + current.price, 0);
      setTotal(t.toFixed(2));
    } else setTotal(0);
  }, [cartItems]);

  return (
    <main id="cart">
      {cartItems.length > 0 ? (
        <div id="cart-container">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <button type="button" onClick={() => handleRemoveItem(item)}>
                <FontAwesomeIcon icon={faCircleMinus} />
              </button>
            </div>
          ))}
          <div id="checkout">
            <p>Total: ${total !== null ? total : 0}</p>

            <button
              type="button"
              onClick={handleCheckout}
              className="dark-button"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="no-items">You have no items in the cart yet!</div>
      )}
    </main>
  );
};

export default Cart;
