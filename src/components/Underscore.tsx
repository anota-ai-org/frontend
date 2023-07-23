import { ReactNode } from "react"

interface UnderscoreProps{
    children?: ReactNode
    className?: string
}

export function Underscore({ children, className }: UnderscoreProps) {
  return (
    <span className={`inline-flex flex-col ${className}`}>
      {children}
      <span className="h-1 w-full bg-backgroundGradient rounded-full" />
    </span>
  );
}