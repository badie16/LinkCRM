import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ArrowLeft, Mail, Phone, Building, Calendar, Activity } from "lucide-react"
import type { Client } from "@/types/client"

interface ClientCardProps {
  client: Client
}

export function ClientCard({ client }: ClientCardProps) {
  const activities = [
    {
      id: 1,
      description: "Appel téléphonique - Suivi commercial",
      date: "2024-01-15T10:30:00Z",
      status: "completed",
    },
    {
      id: 2,
      description: "Email envoyé - Proposition commerciale",
      date: "2024-01-12T14:15:00Z",
      status: "completed",
    },
    {
      id: 3,
      description: "Rendez-vous planifié - Présentation produit",
      date: "2024-01-20T09:00:00Z",
      status: "scheduled",
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <Link href="/dashboard/clients">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la liste
          </Button>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {client.firstName} {client.lastName}
            </h1>
            <p className="text-gray-600 mt-2">{client.company}</p>
          </div>
          <Badge variant={client.status === "active" ? "success" : "secondary"}>
            {client.status === "active" ? "Actif" : "Inactif"}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations client</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{client.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="font-medium text-gray-900">{client.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Entreprise</p>
                  <p className="font-medium text-gray-900">{client.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Date de création</p>
                  <p className="font-medium text-gray-900">{new Date(client.createdAt).toLocaleDateString("fr-FR")}</p>
                </div>
              </div>
            </div>

            {client.address && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Adresse</p>
                <p className="font-medium text-gray-900">{client.address}</p>
              </div>
            )}

            {client.notes && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Notes</p>
                <p className="text-gray-700">{client.notes}</p>
              </div>
            )}
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Activity className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Historique des activités</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">Toutes les interactions avec ce client</p>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full mt-2 ${
                        activity.status === "completed" ? "bg-green-500" : "bg-blue-500"
                      }`}
                    ></div>
                    {index < activities.length - 1 && <div className="w-px h-8 bg-gray-200 ml-1 mt-1"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{activity.description}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(activity.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <Badge variant={activity.status === "completed" ? "success" : "secondary"}>
                    {activity.status === "completed" ? "Terminé" : "Planifié"}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un email
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Planifier RDV
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistiques</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Dernière activité</span>
                <span className="text-sm font-medium text-gray-900">Il y a 3 jours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Nombre d'interactions</span>
                <span className="text-sm font-medium text-gray-900">{activities.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Statut du lead</span>
                <Badge variant="outline">Qualifié</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
