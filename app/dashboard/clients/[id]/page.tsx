import { notFound } from "next/navigation"
import { ClientCard } from "@/components/ClientCard"
import { mockClients } from "@/data/mock"

interface ClientPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ClientPage({ params }: ClientPageProps) {
  const resolvedParams = await params
  const client = mockClients.find((c) => c.id === resolvedParams.id)

  if (!client) {
    notFound()
  }

  return <ClientCard client={client} />
}
