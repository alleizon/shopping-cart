import { Form, Link } from "react-router-dom";
import "../css/Index.css";

const Index = () => (
  <main id="index">
    <div>
      <Link to="shop" id="index-shop">
        Shop
      </Link>
      <Form method="get" role="search">
        <input
          type="search"
          aria-label="search games"
          name="game-name"
          id="game-name"
          placeholder="Search for a game by name..."
        />
        <div className="btn-wrapper">
          <button type="submit">Submit</button>
          <button type="button">Random</button>
        </div>
      </Form>
    </div>
  </main>
);

export default Index;
