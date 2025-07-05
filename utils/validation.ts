export const validateEmail = (email: string): string | true => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) || "Format d'email invalide"
}

export const validatePhone = (phone: string): string | true => {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone) || "Format de téléphone invalide (ex: 01 23 45 67 89)"
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatDateTime = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName[0]}${lastName[0]}`.toUpperCase()
}

export const formatPhoneNumber = (phone: string): string => {
  // Supprime tous les espaces et caractères spéciaux
  const cleaned = phone.replace(/\D/g, "")

  // Formate au format français XX XX XX XX XX
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")
  }

  return phone
}
