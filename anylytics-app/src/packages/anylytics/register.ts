import { pageClick, pageLoad } from "./send";

export default function register() {
  document.addEventListener("click", (event) => {
    pageClick(event);
  });

  pageLoad();
}
