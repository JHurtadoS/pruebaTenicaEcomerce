import { render, screen, waitFor } from '@testing-library/react';
import OrdersTable from '@/app/components/OrderTable';

describe('OrdersTable', () => {
    it('renders the table headers', async () => {
        render(<OrdersTable />);
        await waitFor(() => {
            expect(screen.getByText(/cliente/i)).toBeInTheDocument();
            expect(screen.getByText(/total/i)).toBeInTheDocument();
        });
    });
});
