import { render, screen, waitFor } from '@testing-library/react';
import ProductList from '@/app/components/ProductList';
import { MockAuthProvider } from '../__mocks__/MockAuthProvider';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => ({
    toast: {
        error: vi.fn(),
        success: vi.fn(),
    },
}));

describe('ProductList Component', () => {
    it('shows error when fetch fails', async () => {
        // Espiar y mockear global.fetch
        const fetchMock = vi.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.reject(new Error('Network error'))
        );

        render(
            <MockAuthProvider
                value={{
                    isAuthenticated: true,
                    user: { username: 'Mock User' },
                    login: vi.fn(),
                    logout: vi.fn(),
                }}
            >
                <ProductList />
            </MockAuthProvider>
        );

        // Esperar que `toast.error` sea llamado con el mensaje correcto
        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith('Error al cargar los productos');
        });

        // Restaurar el mock de fetch
        fetchMock.mockRestore();
    });
});
