import { useEffect, useRef } from "react";

const ProductDescription = ({ game }) => {
  const descRef = useRef(null);

  useEffect(() => {
    descRef.current.innerHTML = game.description;
  }, []);

  return (
    <div id="product-description">
      <h1>Description</h1>
      <p ref={descRef} />
    </div>
  );
};

export default ProductDescription;
