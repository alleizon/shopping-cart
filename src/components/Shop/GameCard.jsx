import { Link, useOutletContext } from "react-router-dom";

const GameCard = ({ game }) => {
  const [cartItems, setCartItems] = useOutletContext();

  const handleAddToCart = (action) => {
    const cartCopy = cartItems.slice();
    const gameCopy = game;
    if (action === "add") {
      cartCopy.push(game);
      gameCopy.addedToCart = true;
    } else {
      const index = cartCopy.findIndex((cartGame) => cartGame === gameCopy);
      cartCopy.splice(index, 1);
      gameCopy.addedToCart = false;
    }
    setCartItems(cartCopy);
  };

  return (
    <div className="item-container">
      <div className="card-img-wrapper">
        <p className="card-hover">{game.name}</p>
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
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
