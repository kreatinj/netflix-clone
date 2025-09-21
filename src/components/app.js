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

document.querySelector(".notification").addEventListener("mouseenter", (e) => {
  const menu = e.target.querySelector(".menu");
  menu.style.visibility = "visible";
});

document.querySelector(".notification").addEventListener("mouseleave", (e) => {
  const menu = e.target.querySelector(".menu");
  menu.style.visibility = "hidden";
});

document.querySelector(".profile").addEventListener("mouseenter", (e) => {
  const menu = e.target.querySelector(".menu");
  menu.style.visibility = "visible";
});

document.querySelector(".profile").addEventListener("mouseleave", (e) => {
  const menu = e.target.querySelector(".menu");
  menu.style.visibility = "hidden";
});
