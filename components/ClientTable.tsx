"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Search, ArrowUpDown } from "lucide-react"
import { mockClients } from "@/data/mock"

export function ClientTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const filteredAndSortedClients = useMemo(() => {
    const filtered = mockClients.filter(
      (client) =>
        `${client.firstName} ${client.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm),
    )

    return filtered.sort((a, b) => {
      const nameA = `${a.firstName} ${a.lastName}`.toLowerCase()
      const nameB = `${b.firstName} ${b.lastName}`.toLowerCase()

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB)
      } else {
        return nameB.localeCompare(nameA)
      }
    })
  }, [searchTerm, sortOrder])

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  return (
    <Card className="overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Liste des clients ({filteredAndSortedClients.length})
        </h3>
        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher un client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <Button
                  variant="ghost"
                  onClick={toggleSort}
                  className="font-semibold text-gray-900 hover:text-gray-700"
                >
                  Nom
                  <ArrowUpDown className="ml-2 w-4 h-4" />
                </Button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Téléphone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date de création
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedClients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/clients/${client.id}`} className="block">
                    <div className="font-medium text-gray-900">
                      {client.firstName} {client.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{client.company}</div>
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/clients/${client.id}`} className="block text-gray-900">
                    {client.email}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/clients/${client.id}`} className="block text-gray-900">
                    {client.phone}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/clients/${client.id}`} className="block text-gray-900">
                    {new Date(client.createdAt).toLocaleDateString("fr-FR")}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/dashboard/clients/${client.id}`} className="block">
                    <Badge variant={client.status === "active" ? "success" : "secondary"}>
                      {client.status === "active" ? "Actif" : "Inactif"}
                    </Badge>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
