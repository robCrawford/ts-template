import { div, render } from "./util/page";


function view(): HTMLElement[] {
  return [
    div('Hello World!')
  ];
}

document.addEventListener(
  "DOMContentLoaded",
  (): void => render(view())
);
