import "./global.css";
import Footer from "~/components/footer";
import Header from "~/components/header";
import LoadingSpinner from "./components/loading-spinner";
import Main from "~/components/main";
import handleModal from "./events/handleModal";
import handleSlider from "./events/handleSlider";

const appElement = document.querySelector<HTMLDivElement>('#app')!;

appElement.innerHTML = LoadingSpinner();

const [header, main] = await Promise.all([Header(), Main()]);
appElement.innerHTML = `
${header}
${main}
${Footer()}
`;

document.querySelectorAll(".modal-container").forEach(handleModal);
document.querySelectorAll(".slider").forEach(handleSlider);
