import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

interface ProductFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (product: { name: string; price: number; stock: number }) => void;
    initialValues?: { name: string; price: number; stock: number };
    title: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ isOpen, onClose, onSubmit, initialValues, title }) => {
    const [name, setName] = React.useState(initialValues?.name || '');
    const [price, setPrice] = React.useState(initialValues?.price?.toString() || '');
    const [stock, setStock] = React.useState(initialValues?.stock?.toString() || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            name,
            price: parseFloat(price),
            stock: parseInt(stock, 10)
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalBody>
                        <Input
                            label="Nombre del producto"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            label="Precio"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <Input
                            label="Stock"
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Cancelar
                        </Button>
                        <Button color="primary" type="submit">
                            Guardar
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default ProductForm;