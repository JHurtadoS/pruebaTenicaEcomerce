import React, { createContext, ReactNode } from 'react';

export const MockAuthContext = createContext({
    isAuthenticated: false,
    user: null,
    login: vi.fn(),
    logout: vi.fn(),
});

export const MockAuthProvider: React.FC<{ value: any; children: ReactNode }> = ({ value, children }) => {
    return <MockAuthContext.Provider value={value}>{children}</MockAuthContext.Provider>;
};
