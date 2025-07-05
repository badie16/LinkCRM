"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Animation du logo qui apparaît
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 300)

    // Animation de la barre de progression
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Délai avant de terminer le chargement
          setTimeout(() => {
            onLoadingComplete()
          }, 800)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(logoTimer)
      clearInterval(progressInterval)
    }
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center z-50">    
      <div className="text-center">
        {/* Logo avec animation */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${
            showLogo ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-4"
          }`}
        >
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl border border-white/20 mx-auto mb-6">
            <Image
              src="/iconTransparent.png"
              alt="LinkCRM Logo"
              width={64}
              height={64}
              className="object-contain filter drop-shadow-lg"
            />
          </div>

          {/* Titre avec animation */}
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
            Link<span className="text-blue-200">CRM</span>
          </h1>
          <p className="text-blue-100 text-lg font-light">Gestion Client Moderne</p>
        </div>

        {/* Barre de progression */}
        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4 overflow-hidden backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-white to-blue-200 h-full rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Texte de chargement */}
          <div className="text-white/80 text-sm font-medium">
            {progress < 30 && "Initialisation..."}
            {progress >= 30 && progress < 60 && "Chargement des composants..."}
            {progress >= 60 && progress < 90 && "Configuration de l'interface..."}
            {progress >= 90 && "Presque prêt..."}
          </div>

          {/* Pourcentage */}
          <div className="text-white/60 text-xs mt-2 font-mono">{progress}%</div>
        </div>

        {/* Animation de points */}
        <div className="flex justify-center space-x-1 mt-8">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce animate-delay-100"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce animate-delay-200"></div>
        </div>
      </div>

      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shimmer"></div>
    </div>
  )
}
