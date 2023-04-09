import "../css/Product/Product.css";
import { useLoaderData } from "react-router-dom";
import { getGameBySlug } from "../utils/games";
import ImageCarousel from "../components/Product/ImageCarousel";
import ProductInfo from "../components/Product/ProductInfo";
import ProductDescription from "../components/Product/ProductDescription";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const pathArr = url.pathname.split("/");
  const gameSlug = pathArr[pathArr.length - 1];
  const game = await getGameBySlug(gameSlug);
  return game;
};

const Product = () => {
  const game = useLoaderData();

  return (
    <main id="product">
      <div className="product-container">
        <ImageCarousel game={game} />
        <ProductInfo game={game} />
        <ProductDescription game={game} />
      </div>
    </main>
  );
};

export default Product;
