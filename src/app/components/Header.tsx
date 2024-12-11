'use client';

import React from 'react';
import { Button, Input } from "@nextui-org/react";
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
    const { isAuthenticated, user, login, logout } = useAuth();

    const handleAuthAction = () => {
        if (isAuthenticated) {
            logout();
        } else {
            login({ username: 'usuario@ejemplo.com', password: 'contraseña123' });
        }
    };

    return (
        <header className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold whitespace-nowrap">
                Gestión de Productos y Pedidos
            </h1>

            <div className="flex items-center space-x-4">
                {isAuthenticated && (
                    <span className="text-sm whitespace-nowrap">
                        Bienvenido, <strong>{user?.username}</strong>
                    </span>
                )}
                <Button
                    color="primary"
                    className="bg-white text-blue-600 hover:bg-blue-900 hover:text-white transition-colors px-4 py-2 rounded-lg font"
                    onClick={handleAuthAction}
                >
                    {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                </Button>
            </div>
        </header>
    );
};

export default Header;

