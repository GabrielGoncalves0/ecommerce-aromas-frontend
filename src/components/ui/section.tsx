import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  padding?: "sm" | "md" | "lg" | "xl";
  background?: "default" | "subtitle" | "gradient";
  className?: string;
}

export function Section({ 
  children, 
  padding = "md", 
  background = "default", 
  className 
}: SectionProps) {
  const paddingClasses = {
    sm: "py-8",
    md: "py-16", 
    lg: "py-24",
    xl: "py-32"
  };

  const backgroundClasses = {
    default: "bg-background",
    subtitle: "bg-muted/50",
    gradient: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
  };

  return (
    <section 
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
