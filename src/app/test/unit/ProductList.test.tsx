import { render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import ProductList from '@/app/components/ProductList';
import { toast } from 'react-toastify';

type Mock = ReturnType<typeof vi.fn>;

vi.mock('react-toastify', () => ({
    toast: {
        error: vi.fn(),
        success: vi.fn(),
    },
}));

global.fetch = vi.fn();

describe('ProductList', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('shows error when fetch fails', async () => {
        // Mock de fetch que lanza un error
        (global.fetch as Mock).mockRejectedValueOnce(new Error('Network error'));

        render(<ProductList />);

        // Verificar que toast.error es llamado
        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledTimes(1);
        });

        expect(toast.error).toHaveBeenCalledWith(expect.stringMatching(/Error al cargar los productos/i));
    });
});
