import type { NextPage } from "next";
import Head from "next/head";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Video from "../components/Video";
import Menu from "../components/Menu";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Home: NextPage = () => {
  const { state } = useContext(MenuContext);
  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>Solgar Clone App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {state.menu && <Menu />} */}
      <Slider />
      <Products />
      <Categories />
      <Video />
    </div>
  );
};

export default Home;
