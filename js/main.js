const top10Series = [
  {
    rank: 1,
    title: '사마귀 살인자의 외출',
  },
  {
    rank: 2,
    title: '폭군의 셰프',
  },
  {
    rank: 3,
    title: '에스콰이어',
  },
  {
    rank: 4,
    title: '애마',
  },
  {
    rank: 5,
    title: '은중과 상연',
  },
];

const topSeries = document.getElementById('top-series').querySelector('ol');

top10Series.forEach((series) => {
  const listItem = document.createElement('li');
  listItem.className = 'card';

  const link = document.createElement('a');
  link.href = '#';

  const rankImg = document.createElement('img');
  rankImg.className = 'rank';
  rankImg.src = `assets/main/rank${series.rank}.svg`;
  rankImg.alt = `rank ${series.rank}`;

  const itemImg = document.createElement('img');
  itemImg.className = 'item';
  itemImg.src = `assets/main/series-rank${series.rank}.png`;
  itemImg.alt = series.title;

  link.appendChild(rankImg);
  link.appendChild(itemImg);
  listItem.appendChild(link);
  topSeries.appendChild(listItem);
});

const topMovies = document.getElementById('top-movies').querySelector('ol');

top10Series.forEach((movie) => {
  const listItem = document.createElement('li');
  listItem.className = 'card';

  const link = document.createElement('a');
  link.href = '#';

  const rankImg = document.createElement('img');
  rankImg.className = 'rank';
  rankImg.src = `assets/main/rank${movie.rank}.svg`;
  rankImg.alt = `rank ${movie.rank}`;

  const itemImg = document.createElement('img');
  itemImg.className = 'item';
  itemImg.src = `assets/main/series-rank${movie.rank}.png`;
  itemImg.alt = movie.title;

  link.appendChild(rankImg);
  link.appendChild(itemImg);
  listItem.appendChild(link);
  topMovies.appendChild(listItem);
});
