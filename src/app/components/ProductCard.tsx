/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Pencil, Trash } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
}

interface ProductCardProps {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onEdit, onDelete }) => (
    <Card shadow="sm" isPressable className="hover:shadow-lg transition-shadow duration-300">
        <CardBody className="overflow-visible p-0">
            <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={product.name}
                className="w-full object-cover h-[140px]"
                src={product.image}
            />
        </CardBody>
        <CardFooter className="text-small justify-between flex-col items-start">
            <b className="text-lg">{product.name}</b>
            <p className="text-default-500">Precio: ${product.price.toFixed(2)}</p>
            <p className="text-default-500">Stock: {product.stock}</p>
            <div className="flex justify-end w-full mt-2">
                <Button
                    isIconOnly
                    color="primary"
                    aria-label="Editar"
                    className="mr-2 hover:bg-blue-700 transition-colors"
                    onClick={() => onEdit(product)}
                >
                    <Pencil size={20} />
                </Button>
                <Button
                    isIconOnly
                    color="danger"
                    aria-label="Eliminar"
                    className="hover:bg-red-700 transition-colors"
                    onClick={() => onDelete(product.id)}
                >
                    <Trash size={20} />
                </Button>
            </div>
        </CardFooter>
    </Card>
);

export default ProductCard;
