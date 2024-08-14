import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// JSX --- We can write HTML inside a javascript code and can return that html to render it on the browser.

// Why Use React ----
// We can use states, once we update state once, it gets updated where it is used across the web.
// Can split out React application into multiple components and Reuse those components. Suppose we have used one component multiple times in our app, we update the component once, it gets updated everywhere.
// React uses Virtual DOM, any changes occurs in a particular element, changes only that particular element by going into the DOM tree. It does not create DOM again like in Javascript.
// Debugging and maintenance is easy.

///////////////////////////////////////////////////
// React Library basically reacts on Variable Updation and can update multiple things on the UI simultaneously.

// How to create element using React ---

const userName = "Hello World";

const createElement = React.createElement(
  // Html element given to react finally converted into this type of tree structure(Object)..
  // first parameter - element name, second parameter - attributes, third parameter- Actual Content, 4th Prameter-Variable Name

  "a",
  {
    href: "www.ggogle.co.in",
    target: "_blank",
  },
  "inner content",
  userName
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    createElement
  </React.StrictMode>
);
