"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { LoadingScreen } from "@/components/LoadingScreen"
import Image from "next/image"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const router = useRouter()

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Petite animation d'entrée pour la page de login
    setTimeout(() => {
      setShowLogin(true)
    }, 100)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card
        className={`w-full max-w-md p-8 transform transition-all duration-700 ${
          showLogin ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        <div className="text-center mb-8">
          <div className="select-none pointer-events-none flex justify-center mb-4">
            <Image src="/logo.png" className="object-contain my-2" alt="LinkCRM  Logo" width={200} height={200} />          
          </div>
          {/* <h1 className="text-2xl font-bold text-gray-900">LinkCRM</h1> */}
          <p className="text-gray-600 mt-2">Connectez-vous à votre espace client</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Se connecter
          </Button>
        </form>
      </Card>
    </div>
  )
}
