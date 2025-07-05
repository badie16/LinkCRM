export interface Client {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  address?: string
  notes?: string
  status: "active" | "inactive"
  createdAt: string
}

export interface ClientFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  address?: string
  notes?: string
}

export interface Activity {
  id: number
  type: "call" | "email" | "meeting" | "note"
  description: string
  date: string
  status: "completed" | "scheduled"
}
