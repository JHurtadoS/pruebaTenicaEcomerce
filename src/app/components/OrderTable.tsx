'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { toast, ToastContainer } from 'react-toastify';

interface Order {
    id: number;
    customer: string;
    total: number;
    status: string;
    products: number[];
}

const OrdersTable: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/orders');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            toast.error(
                `Error al cargar los pedidos: ${error instanceof Error ? error.message : String(error)
                }`
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    if (loading) {
        return <div className="text-center p-4">Cargando pedidos...</div>;
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <Table aria-label="Tabla de pedidos">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Cliente</TableColumn>
                    <TableColumn>Total</TableColumn>
                    <TableColumn>Estado</TableColumn>
                    <TableColumn>Productos</TableColumn>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>${order.total.toFixed(2)}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>{order.products.join(', ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default OrdersTable;
