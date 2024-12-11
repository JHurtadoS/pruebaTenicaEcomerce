import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard, { Product } from '@/app/components/product/ProductCard';

describe('ProductCard Component', () => {
    const mockProduct: Product = {
        id: 1,
        name: 'Producto de Prueba',
        price: 100.0,
        stock: 10,
        image: 'https://via.placeholder.com/150',
    };

    it('renders product details correctly', () => {
        render(<ProductCard product={mockProduct} />);

        // Verificar que el nombre del producto está presente
        expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

        // Verificar el precio utilizando un matcher más flexible
        expect(
            screen.getByText((content, element) =>
                element?.textContent === `Precio: $${mockProduct.price}`
            )
        ).toBeInTheDocument();

        // Verificar el stock
        expect(
            screen.getByText((content, element) =>
                element?.textContent === `Stock: ${mockProduct.stock}`
            )
        ).toBeInTheDocument();
    });

    it('does not render action buttons when onEdit and onDelete are not provided', () => {
        render(<ProductCard product={mockProduct} />);

        expect(screen.queryByText(/Editar/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Eliminar/i)).not.toBeInTheDocument();
    });

    it('calls onEdit when the edit button is clicked', () => {
        const mockOnEdit = vi.fn();
        render(<ProductCard product={mockProduct} onEdit={mockOnEdit} />);

        const editButton = screen.getByText(/Editar/i);
        fireEvent.click(editButton);

        expect(mockOnEdit).toHaveBeenCalledTimes(1);
        expect(mockOnEdit).toHaveBeenCalledWith(mockProduct);
    });

    it('calls onDelete when the delete button is clicked', () => {
        const mockOnDelete = vi.fn();
        render(<ProductCard product={mockProduct} onDelete={mockOnDelete} />);

        const deleteButton = screen.getByText(/Eliminar/i);
        fireEvent.click(deleteButton);

        expect(mockOnDelete).toHaveBeenCalledTimes(1);
        expect(mockOnDelete).toHaveBeenCalledWith(mockProduct.id);
    });
});
