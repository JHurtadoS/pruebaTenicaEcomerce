import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: "Producto 1", price: 19.99, stock: 50, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Producto 2", price: 29.99, stock: 30, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Producto 3", price: 39.99, stock: 20, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Producto 4", price: 49.99, stock: 15, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Producto 5", price: 59.99, stock: 10, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Producto 6", price: 69.99, stock: 5, image: "https://via.placeholder.com/150" },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const product = await request.json();
  const newProduct = {
    id: products.length + 1,
    ...product,
    image: "https://via.placeholder.com/150",
  };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(request: Request) {
  const { id, ...updatedProduct } = await request.json();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return NextResponse.json(products[index]);
  }
  return NextResponse.json({ error: 'Product not found' }, { status: 404 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const index = products.findIndex(p => p.id === Number(id));
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1)[0];
    return NextResponse.json(deletedProduct);
  }
  return NextResponse.json({ error: 'Product not found' }, { status: 404 });
}
