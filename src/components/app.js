import { Footer } from "./footer/index.js";
import { Header } from "./header/index.js";
import { Main } from "./main/index.js";

const [header, main, footer] = await Promise.all([
  Header(),
  Main(),
  Footer(),
]);

document.body.innerHTML = `
  ${header}
  ${main}
  ${footer}
`.trim();
