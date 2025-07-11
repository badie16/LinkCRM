"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Building2, LayoutDashboard, Users, UserPlus, LogOut, Menu, X } from "lucide-react"
import Image from "next/image"
const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: Users,
  },
  {
    name: "Ajouter un client",
    href: "/dashboard/clients/add",
    icon: UserPlus,
  },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push("/login")
  }

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo (not selectable) */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200 select-none pointer-events-none">
            <Image src="/iconTransparent.png" className="object-contain my-2" alt="LinkCRM Logo" width={50} height={50} />
            <span className="ml-2 text-xl font-medium text-gray-900 font-sans">Link<span className="text-blue-500">CRM</span></span>
          </div>
          {/* Navigateur */}
          <div className="select-none  px-6 py-2 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
            <span className="text-xs text-blue-600 font-medium">
              {pathname
                .split("/")
                .filter(Boolean)
                .map((segment, idx, arr) => (
                  <span key={idx}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    {idx < arr.length - 1 && <span className="mx-1 text-gray-400">/</span>}
                  </span>
                ))}
            </span>
          </div>
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`select-none flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Logout button */}
          
          <div className="select-none  px-4 py-4 border-t border-gray-200">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5 mr-3 select-none " />
              Se déconnecter
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
