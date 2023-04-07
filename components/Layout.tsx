import React,{FunctionComponent} from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: JSX.Element,
}

const Layout:FunctionComponent<Props> = ({ children }) => {
  return (
    <div >
      <Banner/>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
