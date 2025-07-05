"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ClientForm } from "@/components/ClientForm"
    
export default function AddClientPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const onSubmit = (data: any) => {
    console.log("Nouveau client:", data)
    setShowSuccess(true)
    setTimeout(() => {
      router.push("/dashboard/clients")
    }, 2000)
  }

  if (showSuccess) {
    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-green-800 font-medium">Client ajouté avec succès ! Redirection en cours...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/dashboard/clients">
          <Button variant="ghost" className="mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la liste
          </Button>
        </Link>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Ajouter un client</h1>
          <p className="text-gray-600 mt-2">Créez une nouvelle fiche client</p>
        </div>

        <ClientForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}
