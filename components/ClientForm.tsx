"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Card } from "@/components/ui/Card"
import { validateEmail, validatePhone } from "@/utils/validation"
import type { ClientFormData } from "@/types/client"

interface ClientFormProps {
  onSubmit: (data: ClientFormData) => void
}

export function ClientForm({ onSubmit }: ClientFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ClientFormData>()

  const handleFormSubmit = (data: ClientFormData) => {
    onSubmit(data)
    reset()
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations du client</h3>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              Prénom *
            </label>
            <Input
              id="firstName"
              {...register("firstName", {
                required: "Le prénom est obligatoire",
                minLength: { value: 2, message: "Le prénom doit contenir au moins 2 caractères" },
              })}
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <Input
              id="lastName"
              {...register("lastName", {
                required: "Le nom est obligatoire",
                minLength: { value: 2, message: "Le nom doit contenir au moins 2 caractères" },
              })}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "L'email est obligatoire",
              validate: validateEmail,
            })}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone *
          </label>
          <Input
            id="phone"
            {...register("phone", {
              required: "Le téléphone est obligatoire",
              validate: validatePhone,
            })}
            placeholder="01 23 45 67 89"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Entreprise
          </label>
          <Input id="company" {...register("company")} />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Adresse
          </label>
          <Textarea id="address" {...register("address")} rows={3} />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <Textarea
            id="notes"
            {...register("notes")}
            rows={4}
            placeholder="Informations complémentaires sur le client..."
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Annuler
          </Button>
          <Button type="submit">Ajouter le client</Button>
        </div>
      </form>
    </Card>
  )
}
