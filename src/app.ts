import "./global.css";
import Footer from "~/components/footer";
import Header from "~/components/header";
import handleModal from "./events/handleModal";
import handleSlider from "./events/handleSlider";

const header = await Header();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${header}
    ${Footer()}
  </div>
`;

document.querySelectorAll(".modal-container").forEach(handleModal);
document.querySelectorAll(".slider").forEach(handleSlider);
