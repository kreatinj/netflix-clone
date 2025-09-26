import Footer from "~/components/footer/index.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${Footer()}
  </div>
`;
