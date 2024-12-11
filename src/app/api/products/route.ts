import { NextResponse } from "next/server";
import { products } from "..";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}


export async function POST(request: Request) {
  try {
    const body: Product = await request.json();

    // Validación de datos básicos
    const { name, price, stock, image } = body;

    if (!name || !price || !stock) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newProduct: Product = {
      id: products.length ? products[products.length - 1].id + 1 : 1, // Generar nuevo ID
      name,
      price,
      stock,
      image: "https://via.placeholder.com/150"

    };

    products.push(newProduct); // Agregar nuevo producto
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
