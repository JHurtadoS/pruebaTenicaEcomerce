import Sidebar from '../../components/SideBar';
import { render, screen } from '@testing-library/react';

describe('Sidebar', () => {
    it('renders navigation links', () => {
        render(<Sidebar />);
        expect(screen.getByText(/productos/i)).toBeInTheDocument();
        expect(screen.getByText(/pedidos/i)).toBeInTheDocument();
    });
});
