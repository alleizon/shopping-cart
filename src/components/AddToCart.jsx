import { useOutletContext } from "react-router-dom";

const AddToCart = ({ game }) => {
  const [cartItems, setCartItems] = useOutletContext();

  const handleAddToCart = (action) => {
    const cartCopy = cartItems.slice();
    const gameCopy = game;
    if (action === "add") {
      cartCopy.push(game);
    } else {
      const index = cartCopy.findIndex((cartGame) => cartGame === gameCopy);
      cartCopy.splice(index, 1);
    }
    setCartItems(cartCopy);
  };

  return cartItems.includes(game) ? (
    <button
      className="remove-from-cart"
      type="button"
      onClick={() => handleAddToCart("remove")}
    >
      Remove
    </button>
  ) : (
    <button
      className="add-to-cart"
      type="button"
      onClick={() => handleAddToCart("add")}
    >
      Add to cart ${game.price}
    </button>
  );
};

export default AddToCart;
