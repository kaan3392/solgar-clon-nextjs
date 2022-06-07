import { Document } from "mongoose";
import { ReactNode } from "react";

export interface DotProps {
  active?: boolean;
}
export interface ImageProps {
  active?: boolean;
}

export interface ArrowDirectionProps {
  right?: boolean;
  left?: boolean;
}
export interface HorizontalProps {
  horizontal?:boolean
}
export interface MenuProps {
  menu?:boolean
}

export interface IProduct extends Document{
  name: string ;
  image: string;
  category: string;
  price: string;
  titleEnglish?: string;
  titleTurkish?: string;
  short: string;
  amount: string;
  contentHeader: string;
  contentKeys?: string[];
  contentVals?: string[];
  otherContents?: string;
  howToUse: string;
  extraInfo?: string;
  images: string[];
  children?:ReactNode;
}

export interface ProductsProps{
  products: IProduct[];
}