import ProductCard, { Product } from "./ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewAll?: () => void;
}

const CategorySection = ({ title, products, onAddToCart, onViewAll }: CategorySectionProps) => {
  return (
    <Card className="w-full bg-gradient-subtle border-border/50">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="flex items-center text-primary hover:text-primary-glow transition-colors duration-300 text-sm font-medium"
          >
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No products available in this category yet.</p>
            <p className="text-sm mt-1">More items coming soon!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CategorySection;