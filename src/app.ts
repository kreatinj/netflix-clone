import "./global.css";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Main from "~/components/main";
import handleModal from "./events/handleModal";
import handleSlider from "./events/handleSlider";

const [header, main] = await Promise.all([Header(), Main()]);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${header}
    ${main}
    ${Footer()}
  </div>
`;

document.querySelectorAll(".modal-container").forEach(handleModal);
document.querySelectorAll(".slider").forEach(handleSlider);
