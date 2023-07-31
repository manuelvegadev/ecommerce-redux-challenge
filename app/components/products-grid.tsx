import { Product } from '@/app/api/products/types';
import { ProductCard } from '@/app/components/product-card';

interface ProductsGridProps {
  data: Product[];
}

export const ProductsGrid: React.FC<ProductsGridProps> = async ({ data }) => {
  return (
    <div
      className={
        'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      }
    >
      {data.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
