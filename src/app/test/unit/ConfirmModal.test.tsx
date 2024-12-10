import ConfirmModal from '../../components/ConfirmModal';
import { render, screen, fireEvent } from '@testing-library/react';


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

    it('calls onConfirm when confirm button is clicked', () => {
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
});
