import { NextResponse } from "next/server";
import { products } from "../..";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}



export async function GET() {
  return NextResponse.json(products);
}
