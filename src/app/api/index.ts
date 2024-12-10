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

// Auth API
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

// Orders API
export const fetchOrders = async (): Promise<Order[]> => {
    const response = await fetch('/api/orders');
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    return response.json();
};

// Products API
export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    if (response)
        console.log(response.body)
    return response.json();
};

export const createProduct = async (product: Omit<Product, 'id' | 'image'>): Promise<Product> => {
    const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to create product');
    }
    return response.json();
};

export const updateProduct = async (product: Product): Promise<Product> => {
    const response = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    return response.json();
};

export const deleteProduct = async (id: number): Promise<Product> => {
    const response = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
    return response.json();
};
