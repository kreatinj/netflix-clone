const slideStates = new WeakMap();

/**
 * @param {HTMLElement} slider
 */
export function handleSlider(slider) {
  const list = slider.querySelector("ol, ul");
  const items = Array.from(list.querySelectorAll("li"));
  const leftButton = slider.querySelector("button.left");
  const rightButton = slider.querySelector("button.right");
  const pageIndicator = slider.parentElement.querySelector(".page-indicator");

  const itemsPerScreen = 5;
  const totalPages = Math.ceil(items.length / itemsPerScreen);
  let currentPage = 0;

  slideStates.set(slider, { currentPage: 0 });

  function updateButtons() {
    leftButton.disabled = currentPage === 0;
    rightButton.disabled = currentPage === totalPages - 1;
  }

  function updatePageIndicator() {
    const indicators = Array.from(pageIndicator.querySelectorAll("span"));
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentPage);
    });
  }

  function slide() {
    const offset = currentPage * itemsPerScreen * (items[0].offsetWidth);
    list.style.transform = `translateX(-${offset}px)`;
  }

  leftButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      slide();
      updateButtons();
      updatePageIndicator();
    }
  });

  rightButton.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      slide();
      updateButtons();
      updatePageIndicator();
    }
  });

  // Initialize
  updateButtons();
  updatePageIndicator();
}
