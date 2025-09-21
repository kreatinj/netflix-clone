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
 * @returns {Promise<string>}
 */
export async function Main() {
  return `
<main>
  ${Hero()}
  ${await Categories()}
</main>
`.trim();
}
