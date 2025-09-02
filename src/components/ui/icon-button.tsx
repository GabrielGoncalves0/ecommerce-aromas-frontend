import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
}

export function IconButton({ 
  children, 
  size = "md", 
  variant = "default", 
  className,
  onClick 
}: IconButtonProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10", 
    lg: "h-12 w-12"
  };

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={onClick}
      className={cn(sizeClasses[size], className)}
    >
      {children}
    </Button>
  );
}
