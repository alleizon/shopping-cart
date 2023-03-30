import games from "../utils/games";

const generatePrices = () => {
  games.forEach((game) => {
    const price = Math.floor(Math.random() * 41) + 20;
    const copy = game;
    copy.fakePrice = price - 0.01;
  });
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(games));
};

generatePrices();
