import React, { ReactNode } from 'react';
import { AuthContext } from '@/app/contexts/AuthContext';

export const MockAuthProvider: React.FC<{ value: any; children: ReactNode }> = ({ value, children }) => {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
