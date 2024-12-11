import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import { createProduct } from "@/app/services/products";
import CreateProductForm from "@/app/components/product/ProductCreateForm";

type Mock = ReturnType<typeof vi.fn>;

vi.mock("react-toastify", () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
    },
}));

vi.mock("@/app/services/products", () => ({
    createProduct: vi.fn(),
}));

describe("CreateProductForm Component", () => {
    const mockOnSuccess = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders the form with default values", () => {
        render(<CreateProductForm onSuccess={mockOnSuccess} />);

        expect(screen.getByPlaceholderText(/Nombre del Producto/i)).toHaveValue("");
        expect(screen.getByPlaceholderText(/Precio del Producto/i)).toHaveValue(0);
        expect(screen.getByPlaceholderText(/Stock del Producto/i)).toHaveValue(0);
    });

    // it("displays validation errors when fields are empty", async () => {
    //     render(<CreateProductForm onSuccess={mockOnSuccess} />);

    //     fireEvent.submit(screen.getByRole("form"));

    //     await waitFor(() => {
    //         expect(
    //             screen.getByText((content, element) =>
    //                 element?.textContent?.includes("El nombre es obligatorio") ?? false
    //             )
    //         ).toBeInTheDocument();

    //         expect(
    //             screen.getByText((content, element) =>
    //                 element?.textContent?.includes("El precio es obligatorio") ?? false
    //             )
    //         ).toBeInTheDocument();

    //         expect(
    //             screen.getByText((content, element) =>
    //                 element?.textContent?.includes("El stock es obligatorio") ?? false
    //             )
    //         ).toBeInTheDocument();
    //     });
    // });

    it("calls createProduct with the correct values", async () => {
        const mockProduct = {
            name: "Producto Test",
            price: "100",
            stock: "50",
            image: "",
        };

        render(<CreateProductForm onSuccess={mockOnSuccess} />);

        fireEvent.change(screen.getByPlaceholderText(/Nombre del Producto/i), {
            target: { value: mockProduct.name },
        });
        fireEvent.change(screen.getByPlaceholderText(/Precio del Producto/i), {
            target: { value: mockProduct.price },
        });
        fireEvent.change(screen.getByPlaceholderText(/Stock del Producto/i), {
            target: { value: mockProduct.stock },
        });

        fireEvent.submit(screen.getByRole("form"));

        await waitFor(() => {
            expect(createProduct).toHaveBeenCalledWith({
                name: mockProduct.name,
                price: mockProduct.price,
                stock: mockProduct.stock,
                image: mockProduct.image,
            });
            expect(toast.success).toHaveBeenCalledWith("Producto creado con éxito");
            expect(mockOnSuccess).toHaveBeenCalledTimes(1);
        });
    });

    // it("displays an error toast when createProduct fails", async () => {
    //     (createProduct as Mock).mockRejectedValue(new Error("Network error"));

    //     render(<CreateProductForm onSuccess={mockOnSuccess} />);

    //     fireEvent.change(screen.getByPlaceholderText(/Nombre del Producto/i), {
    //         target: { value: "Producto Error" },
    //     });
    //     fireEvent.change(screen.getByPlaceholderText(/Precio del Producto/i), {
    //         target: { value: "100" },
    //     });
    //     fireEvent.change(screen.getByPlaceholderText(/Stock del Producto/i), {
    //         target: { value: "50" },
    //     });

    //     fireEvent.submit(screen.getByRole("form"));

    //     await waitFor(() => {
    //         expect(createProduct).toHaveBeenCalled();
    //         expect(toast.error).toHaveBeenCalledWith(
    //             "Ocurrió un error al crear el producto"
    //         );
    //     });
    // });
});
