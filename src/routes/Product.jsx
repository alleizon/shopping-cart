import "../css/Product.css";
import { useLoaderData, useOutletContext } from "react-router-dom";
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
  const [cartItems, setCartItems] = useOutletContext();

  return (
    <main id="product">
      <div className="product-container">
        <ImageCarousel />
        <ProductInfo />
        <ProductDescription />
      </div>
    </main>
  );
};

export default Product;
