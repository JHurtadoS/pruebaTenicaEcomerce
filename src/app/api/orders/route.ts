import { NextResponse } from 'next/server';

const orders = [
    { id: 1, customer: "Cliente 1", total: 99.99, status: "Enviado", products: [1, 2, 3] },
    { id: 2, customer: "Cliente 2", total: 149.99, status: "Pendiente", products: [2, 4] },
    { id: 3, customer: "Cliente 3", total: 199.99, status: "Entregado", products: [1, 3, 5] },
];

export async function GET() {
    return NextResponse.json(orders);
}
