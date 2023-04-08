import { Link, useOutletContext } from "react-router-dom";

const GameCard = ({ game }) => {
  const [cartItems, setCartItems] = useOutletContext();

  const handleRemoveFromCart = () => {
    const cartCopy = cartItems.slice();
    const gameCopy = game;
    const index = cartCopy.findIndex((cartGame) => cartGame === gameCopy);
    cartCopy.splice(index, 1);
    gameCopy.addedToCart = false;
    setCartItems(cartCopy);
  };

  const handleAddToCart = () => {
    const cartCopy = cartItems.slice();
    const gameCopy = game;
    cartCopy.push(game);
    gameCopy.addedToCart = true;
    setCartItems(cartCopy);
  };

  return (
    <div className="item-container">
      <div className="card-img-wrapper">
        <img
          src={game.backgroundImage}
          alt={game.name}
          onLoad={(e) => {
            e.target.style.opacity = "1";
          }}
        />
      </div>
      <div className="card-buttons">
        <Link to={`/product/${game.slug}`} className="dark-button">
          Read More
        </Link>
        {game.addedToCart ? (
          <button
            className="remove-from-cart"
            type="button"
            onClick={handleRemoveFromCart}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="add-to-cart"
            type="button"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
