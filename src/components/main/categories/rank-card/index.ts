import "./index.css";

export type RankItem = {
  rank: number;
  title: string;
}

type Prop = {
  item: RankItem;
  type: "series" | "movies";
};

export default function RankCard({ item, type }: Prop) {
  return `
  <li class="rank-card">
    <a href="#">
      <img class="rank" src="assets/main/rank/${item.rank}.svg" alt="rank ${item.rank}">
      <img class="thumbnail" src="assets/main/${type}/${item.rank}.png" alt="${item.title}">
    </a>
  </li>
`;
}
