import React, { FunctionComponent, useContext } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MenuContext } from "../context/MenuContext";
import Menu from "./Menu";

interface Props {
  children: JSX.Element;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const { state } = useContext(MenuContext);
  return (
    <>
      <Banner />
      <Navbar />
      {state.menu && <Menu />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
