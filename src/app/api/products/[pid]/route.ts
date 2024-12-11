import { NextResponse } from "next/server";
import { products } from "../..";

export async function PATCH(request: any, { params }: any) {
    const { pid } = await params;
    const productId = parseInt(pid, 10);

    try {
        const updates = await request.json();
        const productIndex = products.findIndex((p) => p.id === productId);

        if (productIndex === -1) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        products[productIndex] = { ...products[productIndex], ...updates };

        return NextResponse.json(products[productIndex], { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update product" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: any, { params }: any) {

    const { pid } = await params;
    const productId = parseInt(pid, 10);

    console.log(request)

    try {
        const productIndex = products.findIndex((p) => p.id === productId);

        if (productIndex === -1) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        const deletedProduct = products.splice(productIndex, 1)[0];

        return NextResponse.json(deletedProduct, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete product" },
            { status: 500 }
        );
    }
}
