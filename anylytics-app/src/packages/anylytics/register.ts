import { pageClick } from "./send";

export default function register() {
  document.addEventListener("click", (event) => {
    console.log("click");
    pageClick(event);
  });

  console.log(location);
}
