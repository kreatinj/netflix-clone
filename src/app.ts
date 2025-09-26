import "./global.css";
import Footer from "~/components/footer";
import Header from "~/components/header";

const header = await Header();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${header}
    ${Footer()}
  </div>
`;
