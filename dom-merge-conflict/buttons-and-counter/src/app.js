//increments the number in a node's text
import {makeHeader} from "../src/header"
import {makeMain} from "../src/main"

function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");
  const header = makeHeader();
  const main = makeMain();

  body.append(header);
  body.append(main);
  
  const ibutton = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  ibutton.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}
