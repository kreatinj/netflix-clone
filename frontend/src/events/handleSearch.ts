export default function handleSearch(search: Element) {
  search.addEventListener("click", () => {
    search.classList.add("active");
  });
  search.addEventListener("focusout", () => {
    search.classList.remove("active");
  });
}