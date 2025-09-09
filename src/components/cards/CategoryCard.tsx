import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
  className?: string;
}

export default function CategoryCard({ name, image, href, className }: CategoryCardProps) {
  return (
     <Link href={href} className="group">
      <Card className={cn("overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105", className)}>
        <CardContent className="p-0 relative h-64">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold text-center tracking-wide">
              {name}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
