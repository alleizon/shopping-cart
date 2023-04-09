import { useOutletContext } from "react-router-dom";

const ProductInfo = () => {
  const [cartItems, setCartItems] = useOutletContext();

  return <div id="product-info"></div>;
};

export default ProductInfo;
