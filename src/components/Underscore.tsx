import { ReactNode } from "react"

interface UnderscoreProps{
    children?:ReactNode
}

export function Underscore({children}:UnderscoreProps){
    return(
        <strong className="inline-flex flex-col">
            {children}
            <span className="h-1 w-full bg-backgroundGradient"/>
        </strong>
    )
}