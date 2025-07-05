import type React from "react"
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = "", children, ...props }: CardProps) {
  const classes = `bg-white shadow-sm border border-gray-200 rounded-lg ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
