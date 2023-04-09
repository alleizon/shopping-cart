import { createBrowserRouter } from "react-router-dom";
import Index, { loader as indexLoader } from "./index";
import Shop, { loader as shopLoader } from "./Shop";
import Product, { loader as productLoader } from "./Product";
import Cart from "./Cart";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index />, loader: indexLoader },
      {
        path: "shop",
        element: <Shop />,
        loader: shopLoader,
      },
      {
        path: "product/:productId",
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
