import { dbConnect } from "../../../util/mongo";
import { IProduct } from "../../../components/Types";
import Product from "../../../models/Product";
import type { NextApiRequest, NextApiResponse } from "next";
import {solgarData} from "../../../newSolgar"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[] | Error>
) {
  // dbConnect();

  if (req.method === "GET") {
    const { cat } = req.query;
    const filter: any = req.query.filter;

    try {
      let products;

      if (cat) {
        products = await Product.find({ category: cat });
      } else if (filter) {
        products = await Product.find({ "name": {$regex: new RegExp(filter, "i")}}).limit(
          5
        );
      } else {
        console.log("aaa")
        products = await Product.find();
        console.log("bbb")
      }
      console.log("ccc")
      return res.status(200).json(solgarData as IProduct[]);
    } catch (error) {
      console.log("ddd")
      return res.status(500).json(error as Error);
    }
  }
}
