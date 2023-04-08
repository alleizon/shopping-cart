import { createBrowserRouter } from "react-router-dom";
import Index, { loader as indexLoader } from "./index";
import Shop, { loader as shopLoader } from "./Shop";
import Cart from "./Cart";
import Product from "./Product";
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
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
