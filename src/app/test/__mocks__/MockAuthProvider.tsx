import React, { createContext, ReactNode } from 'react';

// Simula la estructura del contexto de autenticación
export const MockAuthContext = createContext({
    isAuthenticated: false,
    user: null,
    login: vi.fn(),
    logout: vi.fn(),
});

// Componente MockAuthProvider para envolver otros componentes en pruebas
export const MockAuthProvider: React.FC<{ value: any; children: ReactNode }> = ({ value, children }) => {
    return <MockAuthContext.Provider value={value}>{children}</MockAuthContext.Provider>;
};
