import { useDisclosure } from "@nextui-org/react";

export interface UseModalReturn {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
}


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
