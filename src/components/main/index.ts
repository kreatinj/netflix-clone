import "./index.css";
import Hero from "./hero";

export default async function Main() {
  return `
<main class="main">
  ${Hero()}
</main>
`.trim();
}
