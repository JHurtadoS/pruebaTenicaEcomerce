'use client';

import React from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Button } from "@nextui-org/react";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Confirmar",
    cancelText = "Cancelar",
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>{message}</ModalBody>
            <ModalFooter>
                <Button variant="light" color="danger" onPress={onClose}>
                    {cancelText}
                </Button>
                <Button color="primary" onPress={onConfirm}>
                    {confirmText}
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default ConfirmModal;
