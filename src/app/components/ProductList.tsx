'use client';

import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/react";
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import ConfirmModal from './ConfirmModal';
import { fetchProducts } from '@/app/api';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

    // Usamos la función fetchProducts desde el index.ts
    const loadProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            toast.error(`Error al cargar los productos: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDeleteProduct = async () => {
        if (!currentProduct) return;
        try {
            const response = await fetch(`/api/products/${currentProduct.id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            await loadProducts();
            setIsDeleteModalOpen(false);
            toast.success("Producto eliminado correctamente");
        } catch (error) {
            toast.error(`Error al eliminar el producto: ${error instanceof Error ? error.message : String(error)}`);
        }
    };

    return (
        <div>
            <Button onClick={() => setIsCreateModalOpen(true)} className="mb-4">Crear Producto</Button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((prod) => (
                    <ProductCard
                        key={prod.id}
                        product={prod}
                        onEdit={(editedProduct) => {
                            setCurrentProduct(editedProduct);
                            setIsEditModalOpen(true);
                        }}
                        onDelete={(id) => {
                            setCurrentProduct(products.find(p => p.id === id) || null);
                            setIsDeleteModalOpen(true);
                        }}
                    />
                ))}
            </div>
            {/* Crear y Editar Producto */}
            <ProductForm
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSubmit={({ name, price, stock }) => console.log("Crear Producto", name, price, stock)}
                title="Crear Producto"
            />
            <ProductForm
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSubmit={(updatedProduct) => console.log("Actualizar Producto", updatedProduct)}
                initialValues={currentProduct || undefined}
                title="Editar Producto"
            />
            {/* Confirmación de Eliminación */}
            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteProduct}
                title="Eliminar Producto"
                message={`¿Estás seguro de que quieres eliminar el producto "${currentProduct?.name}"?`}
                confirmText="Eliminar"
                cancelText="Cancelar"
            />
        </div>
    );
};

export default ProductList;
