'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import OrdersTable from '../components/OrderTable';

export default function Home() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <OrdersTable />
        </div>
    );
}
