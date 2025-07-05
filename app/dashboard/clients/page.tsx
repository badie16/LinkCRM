"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ClientTable } from "@/components/ClientTable"
import { Plus } from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 mt-2">Gérez votre base de clients</p>
        </div>
        <Link href="/dashboard/clients/add">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Ajouter un client
          </Button>
        </Link>
      </div>

      <ClientTable />
    </div>
  )
}
