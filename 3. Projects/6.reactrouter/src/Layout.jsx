import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

// in the below example Header and Footer will be fixed and we can change or give any component in place of "Outlet".
// in the below example, we can give any component in place of outlet, Header and Footer will be fixed. This is how we can include multiple components inbetween Header and Footer.

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
