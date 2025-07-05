import type React from "react"
import { Navbar } from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
