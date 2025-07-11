import { Card } from "@/components/ui/Card"
import { Users, UserPlus, TrendingUp, Activity } from "lucide-react"
import { mockClients } from "@/data/mock"

export default function DashboardPage() {
  const totalClients = mockClients.length
  const recentClients = mockClients.filter((client) => {
    const clientDate = new Date(client.createdAt)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return clientDate > weekAgo
  }).length

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Vue d'ensemble de votre CRM</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Clients</p>
              <p className="text-2xl font-bold text-gray-900">{totalClients}</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">clients enregistrés</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Nouveaux cette semaine</p>
              <p className="text-2xl font-bold text-gray-900">{recentClients}</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <UserPlus className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            +{Math.round((recentClients / totalClients) * 100)}% cette semaine
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Taux de croissance</p>
              <p className="text-2xl font-bold text-gray-900">+12%</p>
            </div>
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">par rapport au mois dernier</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Activités aujourd'hui</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-orange-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">interactions client</p>
        </Card>
      </div>

      {/* Recent Clients and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Clients récents</h3>
          <p className="text-sm text-gray-600 mb-6">Les 5 derniers clients ajoutés</p>

          <div className="space-y-4">
            {mockClients.slice(0, 5).map((client) => (
              <div key={client.id} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    {client.firstName[0]}
                    {client.lastName[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {client.firstName} {client.lastName}
                  </p>
                  <p className="text-sm text-gray-500">{client.email}</p>
                </div>
                <div className="text-sm text-gray-400">{new Date(client.createdAt).toLocaleDateString("fr-FR")}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h3>
          <p className="text-sm text-gray-600 mb-6">Dernières interactions avec les clients</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Nouveau client ajouté</p>
                <p className="text-sm text-gray-500">Marie Dubois - il y a 2h</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Appel client</p>
                <p className="text-sm text-gray-500">Jean Martin - il y a 4h</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Email envoyé</p>
                <p className="text-sm text-gray-500">Sophie Bernard - il y a 6h</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
