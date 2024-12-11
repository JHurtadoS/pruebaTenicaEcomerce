import { useDisclosure } from "@nextui-org/react";

export interface UseModalReturn {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void; // Corrigido para no pasar argumentos a `onOpenChange`.
}

/**
 * Hook personalizado para manejar el estado de los modales utilizando `useDisclosure` de NextUI.
 */
const useModal = (): UseModalReturn => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onToggle = () => {
        if (isOpen) {
            onClose();
        } else {
            onOpen();
        }
    };

    return {
        isOpen,
        onOpen,
        onClose,
        onToggle,
    };
};

export default useModal;
