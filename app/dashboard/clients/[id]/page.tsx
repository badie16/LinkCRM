import { notFound } from "next/navigation"
import { ClientCard } from "@/components/ClientCard"
import { mockClients } from "@/data/mock"

interface ClientPageProps {
  params: {
    id: string
  }
}

export default function ClientPage({ params }: ClientPageProps) {
  const client = mockClients.find((c) => c.id === params.id)

  if (!client) {
    notFound()
  }

  return <ClientCard client={client} />
}
