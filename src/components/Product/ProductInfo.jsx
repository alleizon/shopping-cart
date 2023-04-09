import AddToCart from "../AddToCart";

const ProductInfo = ({ game }) => (
  <div id="product-info">
    <p>{game.name}</p>
    <p>Metacritic score: {game.metacritic}</p>
    <p>Genres: {game.newGenres.join(", ")}</p>
    <p>Released: {game.released}</p>
    <AddToCart game={game} />
  </div>
);

export default ProductInfo;
