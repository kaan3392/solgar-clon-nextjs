import { dbConnect } from "../../../util/mongo";
import { IProduct } from "../../../components/Types";
import Product from "../../../models/Product";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[] | Error>
) {
  console.log("selammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")

  await dbConnect();


  if (req.method === "GET") {
    const { cat } = req.query;
    const filter: any = req.query.filter;
    console.log("giriyor")

    try {
      let products;
      console.log("111")

      if (cat) {
        console.log("aaa")
        products = await Product.find({ category: cat });
      } else if (filter) {
        products = await Product.find({ "name": {$regex: new RegExp(filter, "i")}}).limit(
          5
        );
      } else {
        products = await Product.find();
      }
      console.log("bbbb")
      return res.status(200).json(products);
    } catch (error) {
      console.log("cccc")
      return res.status(500).json(error as Error);
    }
  }
}
