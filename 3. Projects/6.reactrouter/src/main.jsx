import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { loadInfo } from "./components/GitHub/Github.jsx";

// First way of creating routes-----
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },

//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// Second way of creating Routes ----

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={loadInfo} path="github" element={<Github />} />
    </Route>
  )
);

// Loader property in Route basically helps in case of "Api Call". when you are about to click on the link which needs data from API, Loader loads the data from API and store it in the cache memory. it does it before the useEffect Hook.

//UseEffect Hook basically makes the api call, when Click was actually happend.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Here we are setting up Routes.
// RouterProvider is a self closing component, it needs a "prop" --> "router" for it to work.
