import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children, location}) => {
  return (
    <>
      <Header location={location}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
