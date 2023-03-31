import { createBrowserRouter } from "react-router-dom";
import Index from ".";
import Cart from "./Cart";
import Product from "./Product";
import Root from "./root";
import Shop from "./Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product",
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
