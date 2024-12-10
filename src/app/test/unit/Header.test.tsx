import { render, screen } from '@testing-library/react';
import Header from '@/app/components/Header';
import { useAuth } from '@/app/contexts/AuthContext';
type Mock = ReturnType<typeof vi.fn>;

vi.mock('@/app/contexts/AuthContext');

describe('Header Component', () => {
    it('muestra el botón de iniciar sesión cuando no está autenticado', () => {
        (useAuth as Mock).mockReturnValue({
            isAuthenticated: false,
            user: null,
            login: vi.fn(),
            logout: vi.fn(),
        });

        render(<Header onCreateProduct={vi.fn()} />);

        expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
        expect(screen.queryByText(/Crear Producto/i)).not.toBeInTheDocument();
    });

    it('muestra el botón de cerrar sesión cuando está autenticado', () => {
        (useAuth as Mock).mockReturnValue({
            isAuthenticated: true,
            user: { username: 'Mock User' },
            login: vi.fn(),
            logout: vi.fn(),
        });

        render(<Header onCreateProduct={vi.fn()} />);

        expect(screen.getByText(/Cerrar Sesión/i)).toBeInTheDocument();
        expect(screen.getByText(/Crear Producto/i)).toBeInTheDocument();
    });
});
