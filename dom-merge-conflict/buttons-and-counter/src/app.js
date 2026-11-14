//increments the number in a node's text
import {makeHeader} from "../src/header"
import {makeMain} from "../src/main"

function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  makeHeader();
  makeMain();

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}
