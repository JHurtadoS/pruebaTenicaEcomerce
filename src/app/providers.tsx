// app/providers.tsx

import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from './contexts/AuthContext'

// eslint-disable-next-line no-undef
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </NextUIProvider>
    )
}