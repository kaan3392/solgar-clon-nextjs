import { dbConnect } from "../../../util/mongo";
import { IProduct } from "../../../components/Types";
import Product from "../../../models/Product";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct | Error>
) {
  const { id } = req.query;
  dbConnect();

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

  if (req.method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json(error as Error);
    }
  }
}
