export default function handleSlider(slider: Element) {
  const list = slider.querySelector("ol")!;
  const items = Array.from(list.querySelectorAll("li"));
  // const leftButton = slider.querySelector("button.left")!;
  // const rightButton = slider.querySelector("button.right")!;
  const pageIndicator = slider.parentElement!.querySelector(".page-indicator")!;

  const itemsPerScreen = 5;
  const totalItems = items.length;

  let currentItem = 0;

  function updatePageIndicator() {
    const indicators = Array.from(pageIndicator.querySelectorAll("span"));
    const currentPage = Math.ceil((currentItem % totalItems) / itemsPerScreen);
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentPage);
    });
  }
  updatePageIndicator();
}