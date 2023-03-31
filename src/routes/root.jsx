import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
