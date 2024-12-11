import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "@/app/components/ProductForm";

describe("ProductForm Component", () => {
    const mockOnClose = vi.fn();
    const mockOnSubmit = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders the form with initial values", () => {
        render(
            <ProductForm
                isOpen={true}
                onClose={mockOnClose}
                onSubmit={mockOnSubmit}
                initialValues={{ name: "Producto A", price: 100, stock: 50 }}
                title="Editar Producto"
            />
        );

        expect(screen.getByLabelText(/Nombre del producto/i)).toHaveValue("Producto A");
        expect(screen.getByLabelText(/Precio/i)).toHaveValue(100); // Número
        expect(screen.getByLabelText(/Stock/i)).toHaveValue(50); // Número
    });

    it("calls onSubmit with the correct values when the form is submitted", () => {
        render(
            <ProductForm
                isOpen={true}
                onClose={mockOnClose}
                onSubmit={mockOnSubmit}
                title="Crear Producto"
            />
        );

        fireEvent.change(screen.getByLabelText(/Nombre del producto/i), {
            target: { value: "Producto B" },
        });
        fireEvent.change(screen.getByLabelText(/Precio/i), {
            target: { value: "200" },
        });
        fireEvent.change(screen.getByLabelText(/Stock/i), {
            target: { value: "30" },
        });

        const form = screen.getByText(/Guardar/i).closest('form');
        if (form)
            fireEvent.submit(form);

        expect(mockOnSubmit).toHaveBeenCalledWith({
            name: "Producto B",
            price: 200,
            stock: 30,
        });
    });

});
