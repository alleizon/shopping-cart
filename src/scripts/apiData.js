/* eslint-disable camelcase */
/* eslint-disable no-console */
const API_KEY = "?key=a6c36cfa46924e7ab128f7db5f771709";
const URL = "https://api.rawg.io/api/games";

const getGames = async (ids) => {
  const promises = [];
  ids.forEach((id) => {
    promises.push(fetch(`${URL}/${id}${API_KEY}`));
  });
  return Promise.all(promises).then((responses) => {
    const jsonArray = [];
    responses.forEach((response) => {
      jsonArray.push(response.json());
    });
    return Promise.all(jsonArray);
  });
};

const getPages = async () => {
  const promises = [];
  for (let i = 1; i <= 3; i += 1) {
    promises.push(fetch(`${URL}${API_KEY}&page=${i}`));
  }
  return Promise.all(promises).then((responses) => {
    const jsonArray = [];
    responses.forEach((response) => {
      jsonArray.push(response.json());
    });
    return Promise.all(jsonArray);
  });
};

const createGames = async () => {
  const pages = [];

  await getPages()
    .then((data) => {
      data.forEach((page) => pages.push(page));
    })
    .catch((err) => console.error(err));

  const ids = [];
  pages.forEach((page) => {
    page.results.forEach((game) => ids.push(game.id));
  });

  const games = [];
  await getGames(ids)
    .then((gamesJson) => {
      gamesJson.forEach((game) => {
        const newGenres = [];
        game.genres.forEach((genre) => newGenres.push(genre.name));
        const {
          background_image,
          background_image_additional,
          description,
          description_raw,
          metacritic,
          name,
          released,
        } = game;

        games.push({
          backgroundImage: background_image,
          backgroundImageAdditional: background_image_additional,
          description,
          descriptionRaw: description_raw,
          metacritic,
          name,
          newGenres,
          released,
        });
      });
    })
    .catch((err) => console.error(err));

  console.log(JSON.stringify(games));
};

createGames();
