// app/providers.tsx

import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from './contexts/AuthContext'
import { SidebarProvider, SidebarTrigger } from "@/shadCDN/components/ui/sidebar"
import AppSidebar from '@/shadCDN/components/app-sidebar'

// eslint-disable-next-line no-undef
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <AuthProvider>

                <SidebarProvider className='w-screen'>
                    <AppSidebar />
                    <SidebarTrigger />
                    {children}
                </SidebarProvider>
            </AuthProvider>

        </NextUIProvider>


    )
}