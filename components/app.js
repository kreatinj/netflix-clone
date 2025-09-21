import { Footer } from "./footer/index.js";
import { Header } from "./header/index.js";
import { Main } from "./main/index.js";

document.body.innerHTML = `
  ${Header()}
  ${await Main()}
  ${Footer()}
`.trim();
