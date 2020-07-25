import { createElement } from "./modules/createElement";

document
  .querySelector("#app")
  .appendChild(
    createElement(
      "div",
      { className: "adda" },
      createElement(
        "ul",
        { className: "adda" },
        createElement("li", { name: "adda" }, "zzzz"),
        createElement("li", { name: "adda" }, "zzzz")
      )
    )
  );
