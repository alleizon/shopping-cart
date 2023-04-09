import { useState } from "react";

const ImageCarousel = ({ game }) => {
  const [current, setCurrent] = useState(game.backgroundImage);

  const handleClick = (e) => {
    const btnIdx = Number(e.currentTarget.dataset.btnIdx);
    if (btnIdx === 1) setCurrent(game.backgroundImageAdditional);
    else setCurrent(game.backgroundImage);
  };

  return (
    <div id="img-carousel">
      <div>
        <img
          className={current === game.backgroundImage ? "active" : ""}
          src={game.backgroundImage}
          alt={game.name}
          data-img-idx="0"
        />
        <img
          className={current === game.backgroundImageAdditional ? "active" : ""}
          src={game.backgroundImageAdditional}
          alt={game.name}
          data-img-idx="1"
        />
        <div className="carousel-panel">
          <button
            className={current === game.backgroundImage ? "active" : ""}
            type="button"
            data-btn-idx="0"
            aria-label="image-index"
            onClick={handleClick}
          />
          <button
            className={
              current === game.backgroundImageAdditional ? "active" : ""
            }
            type="button"
            data-btn-idx="1"
            aria-label="image-index"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
