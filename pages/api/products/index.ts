import { dbConnect } from "../../../util/mongo";
import { IProduct } from "../../../components/Types";
import Product from "../../../models/Product";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[] | Error>
) {

  await dbConnect();

  if (req.method === "GET") {
    const { cat } = req.query;
    const filter: any = req.query.filter;

    try {
      let products;

      if (cat) {
        products = await Product.find({ category: cat },{name: 1, image: 1, category: 1, _id:1}).limit(5);
      } else if (filter) {
        products = await Product.find({ "name": {$regex: new RegExp(filter, "i")}}, {image:1, name:1, _id:1}).limit(
          5
        );
      } else {
        products = await Product.find({}, {image:1, name:1, _id:1, category:1});
      }
      return res.status(200).json(products);
    } catch (error) {
      console.log(error)
      return res.status(500).json(error as Error);
    }
  }
}
