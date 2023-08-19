import { ReactNode } from "react"

interface FormErrorProps{
    children:ReactNode
}
export function FormError({ children}:FormErrorProps) {
    return (
        <small className="text-red-600 font-bold">{children}</small>
    )
}