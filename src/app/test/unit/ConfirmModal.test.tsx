import ConfirmModal from '../../components/ConfirmModal';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

describe('ConfirmModal', () => {
    it('renders the modal with title and message', () => {
        render(
            <ConfirmModal
                isOpen={true}
                onClose={vi.fn()}
                onConfirm={vi.fn()}
                title="Eliminar Producto"
                message="¿Estás seguro de eliminar este producto?"
            />
        );

        expect(screen.getByText('Eliminar Producto')).toBeInTheDocument();
        expect(screen.getByText('¿Estás seguro de eliminar este producto?')).toBeInTheDocument();
    });

    it('calls onConfirm when the confirm button is clicked', () => {
        const mockOnConfirm = vi.fn();
        render(
            <ConfirmModal
                isOpen={true}
                onClose={vi.fn()}
                onConfirm={mockOnConfirm}
                title="Eliminar Producto"
                message="¿Estás seguro de eliminar este producto?"
            />
        );

        const confirmButton = screen.getByText('Confirmar');
        fireEvent.click(confirmButton);

        expect(mockOnConfirm).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when the cancel button is clicked', () => {
        const mockOnClose = vi.fn();
        render(
            <ConfirmModal
                isOpen={true}
                onClose={mockOnClose}
                onConfirm={vi.fn()}
                title="Eliminar Producto"
                message="¿Estás seguro de eliminar este producto?"
            />
        );

        const cancelButton = screen.getByText('Cancelar');
        fireEvent.click(cancelButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
