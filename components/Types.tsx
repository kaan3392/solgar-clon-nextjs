import { Document } from "mongoose";
import { ParsedUrlQuery } from "querystring";
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
export interface ActiveTitleProps {
  activeTitle?:boolean
}
export interface ActiveArrowProps {
  activeArrow?:boolean
}
export interface DirectionArrowProps {
  upArrow?:boolean
  downArrow?:boolean
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
  contents:any;
  contentHeader?: string;
  contentKeys?: string[];
  contentVals?: string[];
  otherContents?: string;
  howToUse: string;
  extraInfo?: string;
  images: string[];
  children?:ReactNode;
}

export interface ProductProps{
  product:IProduct;
}

export interface ProductsProps{
  products: IProduct[];
}

export interface IParams extends ParsedUrlQuery {
  id: string
}

export interface ActiveProps {
  active?:boolean;
}

export type Props = {
  children?: ReactNode;
};