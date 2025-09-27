import "./index.css";

type RankItem = {
  rank: number;
  title: string;
}

type Prop = {
  item: RankItem;
  type: "series" | "movies";
};

export default function RankCard({ item, type }: Prop) {
  // const rankImg = await import(`assets/main/rank/${item.rank}.svg?raw`);
  return `
<li class="rank-card">
  <a href="#">
    <img src="assets/main/rank/${item.rank}.svg" alt="rank ${item.rank}">
    <img src="assets/main/${type}/${item.rank}.png" alt="${item.title}">
  </a>
</li>
`;
}
