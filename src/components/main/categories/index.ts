import { loadJson } from '~/helpers/loadJson';
import RankCard, { type RankItem } from './rank-card';
import RegularCard, { type Item } from './regular-card';


const top10SeriesPromise = loadJson<RankItem[]>("/data/top10-series.json");
const newContentsPromise = loadJson<Item[]>("/data/new-contents.json");
const top10MoviesPromise = loadJson<RankItem[]>("/data/top10-movies.json");

export default async function Categories() {
  const [top10Series, newContents, top10Movies] = await Promise.all([
    top10SeriesPromise,
    newContentsPromise,
    top10MoviesPromise,
  ]);

  return `
  <section class="categories">
    <section class="rank">
      <h2>오늘 대한민국의 TOP 10 시리즈</h2>
      
      <div class="slider">
        <button class="left" aria-label="왼쪽으로 이동">
          <b><</b>
        </button>
        <ol>
          ${top10Series.map((item) => RankCard({ item, type: "series" })).join("")}
        </ol>
        <button class="right" aria-label="왼쪽으로 이동">
          <b>></b>
        </button>
      </div>
    </section>
    <section class="regular">
      <h2>넷플릭스에 새로 올라온 콘텐츠</h2>
      
      <div class="slider">
        <button class="left" aria-label="왼쪽으로 이동">
          <b><</b>
        </button>
        <ul>
          ${newContents.map((item) => RegularCard({ item })).join("")}
        </ul>
        <button class="right" aria-label="왼쪽으로 이동">
          <b>></b>
        </button>
      </div>
    </section>
    <section class="rank">
      <h2>오늘 대한민국의 TOP 10 영화</h2>
      
      <div class="slider">
        <button class="left" aria-label="왼쪽으로 이동">
          <b><</b>
        </button>
        <ol>
          ${top10Movies.map((item) => RankCard({ item, type: "movies" })).join("")}
        </ol>
        <button class="right" aria-label="왼쪽으로 이동">
          <b>></b>
        </button>
      </div>
    </section>
  </section>
`
}
