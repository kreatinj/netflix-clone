import "./global.css";
import Footer from "~/components/footer";
import Header from "~/components/header";
import handleModal from "./events/handleModal";

const header = await Header();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${header}
    ${Footer()}
  </div>
`;

document.querySelectorAll(".modal-container").forEach(handleModal);
