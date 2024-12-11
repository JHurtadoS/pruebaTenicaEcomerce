'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Home, Inbox, Settings, Package } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/shadCDN/components/ui/sidebar";

const menuItems = [
    {
        title: "Productos",
        url: "/",
        icon: Package,
    },
    {
        title: "Pedidos",
        url: "/pedidos",
        icon: Inbox,
    },
];

const AppSidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <Sidebar className="w-64 min-h-screen bg-gray-200">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-gray-700 font-bold text-lg mb-4">
                        Links
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${pathname === item.url
                                                ? 'bg-blue-600 text-white'
                                                : 'hover:bg-gray-300 text-gray-700'
                                                }`}
                                        >
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;
