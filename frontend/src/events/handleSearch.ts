import { debounce } from "~/helpers/debounce";

export default function handleSearch(searchContainer: Element) {
  const input = searchContainer.querySelector<HTMLInputElement>("input.search-input")!;

  searchContainer.addEventListener("click", () => {
    searchContainer.classList.add("active");
    input.focus();
  });
  input.addEventListener("focusout", () => {
    searchContainer.classList.remove("active");
  });

  const dataList = searchContainer.querySelector<HTMLDataListElement>("datalist#search-datalist")!;
  const search = debounce((query: string) => {
    fetch('http://localhost:3001/api/search?q=' + encodeURIComponent(query))
      .then(response => response.json())
      .then(data => {
        dataList.innerHTML = "";
        data.items.forEach((item: string) => {
          const option = document.createElement("option");
          option.value = item;
          dataList.appendChild(option);
        });
      });
  });

  input.addEventListener("input", () => {
    search(input.value);
  });
}