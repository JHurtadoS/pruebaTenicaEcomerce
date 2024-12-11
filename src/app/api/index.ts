export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
}

export interface Order {
    id: number;
    customer: string;
    total: number;
    status: string;
    products: number[];
}

export const login = async (username: string, password: string): Promise<{ token: string }> => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
        throw new Error('Invalid credentials');
    }
    return response.json();
};

export const products = [
    { id: 1, name: "Producto 1", price: 19.99, stock: 50, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Producto 2", price: 29.99, stock: 30, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto 3", price: 39.99, stock: 20, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Producto 4", price: 49.99, stock: 15, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Producto 5", price: 59.99, stock: 10, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Producto 6", price: 69.99, stock: 5, image: "https://via.placeholder.com/150" },
];
