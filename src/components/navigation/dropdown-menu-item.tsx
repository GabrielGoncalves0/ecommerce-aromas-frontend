import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

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
  className 
}: DropdownMenuItemProps) {
  return (
    <Link href={href} className="block">
      <Card className={cn(
        "bg-gray-200/40 hover:bg-gray-200/80 transition-colors border border-border shadow-none",
        className
      )}>
        <CardContent className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-md text-foreground truncate">
              {title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
