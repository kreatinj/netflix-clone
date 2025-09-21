import { RankCard } from "./RankCard.js";
import { RegularCard } from "./RegularCard.js";

/**
 * @typedef {import("./RankCard.js").RankItem} RankItem
 * @typedef {import("./RegularCard.js").Item} Item
 */

/**
 * @async
 * @function Categories
 *
 * @param {Promise<RankItem[]>} top10SeriesPromise
 * @param {Promise<Item[]>} newContentsPromise
 * @param {Promise<RankItem[]>} top10MoviesPromise
 *
 * @returns {Promise<string>}
 */
export async function Categories(
  top10SeriesPromise,
  newContentsPromise,
  top10MoviesPromise
) {
  const [top10Series, newContents, top10Movies] = await Promise.all([
    top10SeriesPromise,
    newContentsPromise,
    top10MoviesPromise,
  ]);

  return `
<section class="categories">
  <section class="rank">
    <h2>오늘 대한민국의 TOP 10 시리즈</h2>
    <ol>
      ${top10Series.map((item) => RankCard(item, "series")).join("\n        ")}
    </ol>
  </section>
  <section class="regular">
    <h2>넷플릭스에 새로 올라온 콘텐츠</h2>
    <ul>
      ${newContents.map((item) => RegularCard(item)).join("\n        ")}
    </ul>
  </section>
  <section class="rank">
    <h2>오늘 대한민국의 TOP 10 영화</h2>
    <ol>
      ${top10Movies.map((item) => RankCard(item, "movies")).join("\n        ")}
    </ol>
  </section>
</section>
`.trim();
}
