import { createBrowserRouter } from "react-router-dom";
import Index, { loader as indexLoader } from ".";
import Cart from "./Cart";
import Product from "./Product";
import Root from "./root";
import Shop from "./Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index />, loader: indexLoader },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
