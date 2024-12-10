'use client'

import React from 'react';
import { Button } from "@nextui-org/react";
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
    onCreateProduct: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCreateProduct }) => {
    const { isAuthenticated, user, login, logout } = useAuth();

    const handleAuthAction = () => {
        if (isAuthenticated) {
            logout();
        } else {
            login({ username: 'usuario@ejemplo.com', password: 'contraseña123' });
        }
    };

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Gestión de Productos y Pedidos</h1>
            <div className="flex items-center space-x-4">
                {isAuthenticated && (
                    <>
                        <span className="text-sm">Bienvenido, {user?.username}</span>
                        <Button color="secondary" className="hover:bg-blue-700 transition-colors" onClick={onCreateProduct}>Crear Producto</Button>
                    </>
                )}
                <Button
                    color="secondary"
                    className="hover:bg-blue-700 transition-colors"
                    onClick={handleAuthAction}
                >
                    {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                </Button>
            </div>
        </header>
    );
};

export default Header;