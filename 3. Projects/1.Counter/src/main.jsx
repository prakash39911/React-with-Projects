import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Whenever State Changes, it Triggers Re-Render of that component.

// if we want to persist some data, while changing the state and re-render happens. We can use "useRef" Hook.
// if we change the value of useRef hook, it does not trigger re-render.
// const a = useRef(0)
// a.current will give initially set value i.e. "0".

// useRef hook is also used to reference an Element.  const reference = useRef(),
// this attribute can be passed to an element, which we want to refer ---> ref = {reference}

// CreateRoot method basically creates Virtual DOM like structure. it compare it's DOM structure with the Browser's DOM, and Update the UI only where changes occured.
// Browsers DOM recreates the DOM structure Completely if any changes occured. THis is called Page reload.

// Virtual DOM gets updated based on Fiber Algorithm.

// React Reconciliation is the algorithm known as Virtual-DOM.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
