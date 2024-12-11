import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/app/components/Header';
import { MockAuthProvider } from '../__mocks__/MockAuthProvider';

const mockLogin = vi.fn();
const mockLogout = vi.fn();

describe('Header Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the login button when not authenticated', () => {
        render(
            <MockAuthProvider
                value={{
                    isAuthenticated: false,
                    user: null,
                    login: mockLogin,
                    logout: mockLogout,
                }}
            >
                <Header />
            </MockAuthProvider>
        );

        const loginButton = screen.getByText(/Iniciar Sesión/i);
        expect(loginButton).toBeInTheDocument();

        fireEvent.click(loginButton);
        expect(mockLogin).toHaveBeenCalledTimes(1);
    });

    it('renders the logout button and user info when authenticated', () => {
        render(
            <MockAuthProvider
                value={{
                    isAuthenticated: true,
                    user: { username: 'Mock User' },
                    login: mockLogin,
                    logout: mockLogout,
                }}
            >
                <Header />
            </MockAuthProvider>
        );

        const logoutButton = screen.getByText(/Cerrar Sesión/i);
        expect(logoutButton).toBeInTheDocument();

        fireEvent.click(logoutButton);
        expect(mockLogout).toHaveBeenCalledTimes(1);

        expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock User/i)).toBeInTheDocument();
    });
});
