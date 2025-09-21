import { Footer } from "./footer/index.js";
import { Header } from "./header/index.js";
import { Main } from "./main/index.js";

async function loadJsonData(url) {
  const response = await fetch(url);
  return await response.json();
}

const top10SeriesPromise = loadJsonData("data/top10-series.json");
const newContentsPromise = loadJsonData("data/new-contents.json");
const top10MoviesPromise = loadJsonData("data/top10-movies.json");

const main = await Main(
  top10SeriesPromise,
  newContentsPromise,
  top10MoviesPromise
);

document.body.innerHTML = `
  ${Header()}
  ${main}
  ${Footer()}
`.trim();
