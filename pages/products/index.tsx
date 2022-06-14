import React, { useContext } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import FilterProducts from "../../components/FilterProducts";
import { IProduct } from "../../components/Types";
import { MenuContext } from "../../context/MenuContext";
import Menu from "../../components/Menu";
import axios from "axios";
import { BASE_URL } from "../../util/url";
import { dbConnect } from "../../util/mongo";

const Products: NextPage<{ products: IProduct[] }> = ({ products }) => {
  const { state } = useContext(MenuContext);

  return (
    <div style={{ position: "relative"}}>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {state.menu && <Menu />}
      <FilterProducts products={products} />
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
console.log("mmmmmmmmmmmmmmmmmmmmmmm")
  await dbConnect();
  let res;
  if (query.category || query.category !== "Tüm Ürünler") {
    console.log(query.category)
    res = await axios.get<IProduct>(
      `${BASE_URL}products?cat=${decodeURIComponent(query.category as string)}`
    );
    
  } 
  else {
    console.log(query.category)
    res = await axios.get<IProduct>(`${BASE_URL}products`);
  }
  return {
    props: {
      products: res.data,
    },
  };
};
export default Products;
