import Link from "next/link";

import { ReactNode } from "react";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface DropdownMenuItemProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "default" | "hover";
  className?: string;
}

export function DropdownMenuItem({ 
  href, 
  icon, 
  title, 
  description, 
  variant = "default",
  className 
}: DropdownMenuItemProps) {
  return (
    <Link href={href} className="block">
      <Card className={cn(
        "hover:bg-muted/50 transition-colors border-0 shadow-none",
        className
      )}>
        <CardContent className="p-3 flex items-center space-x-3">
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm text-foreground truncate">
              {title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
