import { ReactNode } from "react"

interface UnderscoreProps {
  children?: ReactNode;
  className?: string;
  bgTailwind?: string;
  fullLine?: boolean;
  lineBold?: "sm" | "lg";
}

export function Underscore({
  children,
  className,
  bgTailwind,
  fullLine = false,
  lineBold="lg",
}: UnderscoreProps) {
  return (
    <span
      className={` ${fullLine ? "flex" : "inline-flex"} flex-col ${className}`}
    >
      {children}
      <span
        className={`
        ${lineBold == "lg" ? "h-1" : "h-smallHeight"}
        w-full ${
          bgTailwind ? bgTailwind : "bg-backgroundGradient"
        } rounded-full`}
      />
    </span>
  );
}