const customRender = function (reactElement, container) {
  const createElement = document.createElement(reactElement.type);
  createElement.setAttribute("href", reactElement.props.href);
  createElement.setAttribute("target", reactElement.props.target);

  createElement.innerHTML = reactElement.content;

  container.appendChild(createElement);
};

const reactElement = {
  // Any html given to the react is basically converted to this type of Object or tree like structure.
  type: "a",
  props: {
    href: "www.google.co.in",
    target: "_blank",
  },
  content: "hey this is custom react",
};

const container = document.getElementById("root");

customRender(reactElement, container);
