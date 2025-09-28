import './index.css';

type Props = {
  children?: string | string[];
}

export default function Carousel({ children }: Props) {
  const items = Array.isArray(children) ? children.join("") : (children ?? '');
  return `
  <div class="carousel">
    <button class="left" aria-label="왼쪽으로 이동">
      <b><</b>
    </button>
    <ol>
      ${items}
    </ol>
    <button class="right" aria-label="왼쪽으로 이동">
      <b>></b>
    </button>
  </div>
  `;
}
