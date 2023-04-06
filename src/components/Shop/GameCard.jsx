const GameCard = ({ game }) => {
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
      <div>
        <p>More info</p>
        <span>add to cart</span>
      </div>
    </div>
  );
};

export default GameCard;
