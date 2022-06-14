import { dbConnect } from "../../../util/mongo";
import { IProduct } from "../../../components/Types";
import Product from "../../../models/Product";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[] | Error>
) {
  await dbConnect();

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

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
        products = await Product.find();
      }
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json(error as Error);
    }
  }
}
