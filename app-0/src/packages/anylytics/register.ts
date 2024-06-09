import { pageClick, pageLoad, pageState, pageUnload } from "./send";

export default function register() {
  pageLoad();

  document.addEventListener("click", (event) => {
    pageClick(event);
  });

  window.onbeforeunload = () => {
    pageUnload();
  };

  document.addEventListener("visibilitychange", (event) => {
    pageState();
  });
}
