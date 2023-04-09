import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";

const GameCard = ({ game }) => (
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
      <AddToCart game={game} />
    </div>
  </div>
);

export default GameCard;
