'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    username: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (credentials: { username: string; password: string }) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            setUser({ username: localStorage.getItem('username') || '' });
        }
    }, []);

    const login = async (credentials: { username: string; password: string }) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', credentials.username);
            setIsAuthenticated(true);
            setUser({ username: credentials.username });
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};