'use client';

import { Button } from '@nextui-org/react';
import React from 'react';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
    onEdit?: (product: Product) => void; // Hacemos que onEdit sea opcional
    onDelete?: (id: number) => void;    // Hacemos que onDelete sea opcional
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => {


    const { price, stock, name } = product


    return (
        <div className="border rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-white">{name}</h2>
            <p className="text-lg font-semibold text-gray-300">Precio: ${price}</p>
            <p className="text-sm font-light text-gray-500">Stock: {stock}</p>

            <div className="flex justify-end mt-4 space-x-4">
                {onEdit && (
                    <Button
                        className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => onEdit(product)}
                    >
                        Editar
                    </Button>
                )}
                {onDelete && (
                    <Button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => onDelete(product.id)}
                    >
                        Eliminar
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
