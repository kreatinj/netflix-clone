import { Hero } from "./Hero.js";
import { Categories } from "./Categories.js";

/**
 * @typedef {import("./RankCard.js").RankItem} RankItem
 * @typedef {import("./RegularCard.js").Item} Item
 */

/**
 * @async
 * @function Main
 *
 * @param {Promise<RankItem[]>} top10SeriesPromise
 * @param {Promise<Item[]>} newContentsPromise
 * @param {Promise<RankItem[]>} top10MoviesPromise
 *
 * @returns {Promise<string>}
 */
export async function Main(
  top10SeriesPromise,
  newContentsPromise,
  top10MoviesPromise
) {
  const categories = await Categories(
    top10SeriesPromise,
    newContentsPromise,
    top10MoviesPromise
  );

  return `
<main>
  ${Hero()}
  ${categories}
</main>
`.trim();
}
