import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Grid({ children, cols = 1, gap = "md", className }: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
    12: "grid-cols-12"
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6", 
    xl: "gap-8"
  };

  return (
    <div 
      className={cn(
        "grid",
        colClasses[cols],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
