import mongoose, { Schema } from "mongoose";
import {IProduct} from "../components/Types";

const ProductSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    titleEnglish: {
      type: String
    },
    titleTurkish: {
      type: String
    },
    short: {
      type: String
    },
    amount: {
      type: String
    },
    contentHeader: {
      type: String
    },
    contentKeys: {
      type: [String]
    },
    contentVals: {
      type: [String]
    },
    otherContents: {
      type: String
    },
    howToUse: {
      type: String
    },
    extraInfo: {
      type: String
    },
    images: {
      type: [String]
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);