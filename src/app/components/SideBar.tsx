'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <aside className="bg-gray-200 w-64 min-h-screen p-4">
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/productos"
                            className={`block p-2 rounded transition-colors ${pathname === '/productos'
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-gray-300'
                                }`}
                        >
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/pedidos"
                            className={`block p-2 rounded transition-colors ${pathname === '/pedidos'
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-gray-300'
                                }`}
                        >
                            Pedidos
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;