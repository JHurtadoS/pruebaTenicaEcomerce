import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ProductCard from '@/app/components/ProductCard';

describe('ProductCard', () => {
    const mockProduct = {
        id: 1,
        name: 'Producto de Prueba',
        price: 100.0,
        stock: 10,
        image: 'https://via.placeholder.com/150',
    };

    it('renders product details correctly', () => {
        render(
            <ProductCard
                product={mockProduct}
                onEdit={vi.fn()}
                onDelete={vi.fn()}
            />
        );

        // Verifica el nombre del producto
        expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

        // Verifica el precio y el stock con matchers más específicos
        expect(screen.getByText(/Precio:\s*\$100\.00/i)).toBeInTheDocument();
        expect(screen.getByText(/Stock:\s*10/i)).toBeInTheDocument();
    });

    it('calls onEdit when edit button is clicked', () => {
        const mockOnEdit = vi.fn();

        render(
            <ProductCard
                product={mockProduct}
                onEdit={mockOnEdit}
                onDelete={vi.fn()}
            />
        );

        const editButton = screen.getByRole('button', { name: /editar/i });
        fireEvent.click(editButton);

        expect(mockOnEdit).toHaveBeenCalledTimes(1);
        expect(mockOnEdit).toHaveBeenCalledWith(mockProduct);
    });

    it('calls onDelete when delete button is clicked', () => {
        const mockOnDelete = vi.fn();

        render(
            <ProductCard
                product={mockProduct}
                onEdit={vi.fn()}
                onDelete={mockOnDelete}
            />
        );

        const deleteButton = screen.getByRole('button', { name: /eliminar/i });
        fireEvent.click(deleteButton);

        expect(mockOnDelete).toHaveBeenCalledTimes(1);
        expect(mockOnDelete).toHaveBeenCalledWith(mockProduct.id);
    });
});
