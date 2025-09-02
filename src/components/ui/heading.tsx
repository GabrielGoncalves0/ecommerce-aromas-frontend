import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  className?: string;
}

export function Heading({ 
  children, 
  level = 1, 
  align = "left", 
  gradient = false,
  className 
}: HeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center", 
    right: "text-right"
  };

  const gradientClass = gradient 
    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
    : "";

  const baseClasses = cn(
    "font-bold tracking-tight",
    alignClasses[align],
    gradientClass,
    className
  );

  switch (level) {
    case 1:
      return <h1 className={cn("text-4xl md:text-5xl lg:text-6xl", baseClasses)}>{children}</h1>;
    case 2:
      return <h2 className={cn("text-3xl md:text-4xl lg:text-5xl", baseClasses)}>{children}</h2>;
    case 3:
      return <h3 className={cn("text-2xl md:text-3xl", baseClasses)}>{children}</h3>;
    case 4:
      return <h4 className={cn("text-xl md:text-2xl", baseClasses)}>{children}</h4>;
    case 5:
      return <h5 className={cn("text-lg md:text-xl", baseClasses)}>{children}</h5>;
    case 6:
      return <h6 className={cn("text-base md:text-lg", baseClasses)}>{children}</h6>;
    default:
      return <h1 className={cn("text-4xl md:text-5xl lg:text-6xl", baseClasses)}>{children}</h1>;
  }
}
