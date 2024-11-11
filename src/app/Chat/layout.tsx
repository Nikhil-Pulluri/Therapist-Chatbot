import type { Metadata } from 'next'
import Sidebar_07 from '@/components/components-sidebar-07'
import ProtectedRoute from '@/context/secureroute'

export const metadata: Metadata = {
  title: 'ChatBot',
  description: 'Generated by create next app',
}

import { SidebarProvider } from '@/components/ui/sidebar'

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <ProtectedRoute>
        <SidebarProvider>
          <Sidebar_07>{children}</Sidebar_07>
        </SidebarProvider>
      </ProtectedRoute>
    </main>
  )
}
