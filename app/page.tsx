import { ProductsGrid } from './components/products-grid';
import fs from 'fs';
import { Product } from '@/app/api/products/types';

const getFirstPage = async () => {
  const products = fs.readFileSync('data/products.json', 'utf8');
  const parsedProducts = JSON.parse(products) as Product[];

  return parsedProducts.slice(0, 10);
};

export default async () => {
  const data = await getFirstPage();
  return <ProductsGrid data={data} />;
};

export const metadata = {
  title: 'Redux Toolkit',
};
