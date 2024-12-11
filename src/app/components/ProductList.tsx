'use client';

import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { toast } from 'react-toastify';
import useModal from './product/useModal';
import ProductCard from './product/ProductCard';
import ProductCreateForm from './product/ProductCreateForm';
import ProductEditForm from './product/ProductEditForm';
import { deleteProduct, fetchProducts } from '../services/products';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

    const createModal = useModal();
    const editModal = useModal();
    const deleteModal = useModal();

    const loadProducts = async () => {
        try {
            const response = await fetchProducts();
            console.log(response)
            setProducts(response);
        } catch {
            toast.error('Error al cargar los productos');
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDeleteProduct = async () => {
        if (!currentProduct) return;

        try {
            //await axiosInstance.delete(`/products/${currentProduct.id}`);
            await deleteProduct(currentProduct.id)
            toast.success('Producto eliminado correctamente');
            loadProducts();
            deleteModal.onClose();
        } catch {
            toast.error('Error al eliminar el producto');
        }
    };

    console.log(products)

    return (
        <div>
            <Button color="primary" onPress={createModal.onOpen} className="mb-4">
                Crear Producto
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onEdit={() => {
                            setCurrentProduct(product);
                            editModal.onOpen();
                        }}
                        onDelete={() => {
                            setCurrentProduct(product);
                            deleteModal.onOpen();
                        }}
                    />
                ))}
            </div>

            <Modal isOpen={createModal.isOpen} onOpenChange={createModal.onToggle}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader>
                                <h3>Crear Producto</h3>
                            </ModalHeader>
                            <ModalBody>
                                <ProductCreateForm
                                    onSuccess={() => {
                                        createModal.onClose();
                                        loadProducts();
                                    }}
                                />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {currentProduct && (
                <Modal isOpen={editModal.isOpen} onOpenChange={editModal.onToggle}>
                    <ModalContent>
                        {() => (
                            <>
                                <ModalHeader>
                                    <h3>Editar Producto</h3>
                                </ModalHeader>
                                <ModalBody>
                                    <ProductEditForm
                                        product={currentProduct} // Pasamos el producto completo
                                        onSuccess={() => {
                                            editModal.onClose();
                                            loadProducts();
                                        }}
                                    />

                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}

            {currentProduct && (
                <Modal isOpen={deleteModal.isOpen} onOpenChange={deleteModal.onToggle}>
                    <ModalContent>
                        {() => (
                            <>
                                <ModalHeader>
                                    <h3>Eliminar Producto</h3>
                                </ModalHeader>
                                <ModalBody>
                                    <p>¿Estás seguro de que quieres eliminar el producto <b>{currentProduct.name}</b>?</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onPress={handleDeleteProduct}>
                                        Eliminar
                                    </Button>
                                    <Button color="primary" onPress={deleteModal.onClose}>
                                        Cancelar
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </div>
    );
};

export default ProductList;
