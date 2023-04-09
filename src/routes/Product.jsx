import { useLoaderData, useOutletContext } from "react-router-dom";
import { getGameBySlug } from "../utils/games";

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

  return <div>rea</div>;
};

export default Product;
