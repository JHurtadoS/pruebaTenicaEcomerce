'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { AuthProvider } from './contexts/AuthContext';
import Sidebar from './components/SideBar';
import OrdersTable from './components/OrderTable';

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-4 bg-neutral-800">
          <h1 className="text-2xl font-bold mb-4 text-white">
            {pathname === '/pedidos' ? 'Pedidos' : 'Productos'}
          </h1>
          {pathname === '/pedidos' ? <OrdersTable /> : <ProductList />}
        </main>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
