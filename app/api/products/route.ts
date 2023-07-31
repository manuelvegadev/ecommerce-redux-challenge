import { NextResponse } from 'next/server';
import * as fs from 'fs';
import { Product } from '@/app/api/products/types';

export async function GET(req: Request, res: Response) {
  const products = fs.readFileSync('data/products.json', 'utf8');
  const parsedProducts = JSON.parse(products) as Product[];

  const url = new URL(req.url as string, 'http://localhost:3000');

  const page = url.searchParams.get('page')
    ? Number(url.searchParams.get('page'))
    : 1;
  const perPage = url.searchParams.get('perPage')
    ? Number(url.searchParams.get('perPage'))
    : 10;

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginatedProducts = parsedProducts.slice(start, end);

  const totalPages = Math.ceil(parsedProducts.length / perPage);

  const meta = {
    page,

    perPage,
    totalPages,
    total: parsedProducts.length,
  };

  return NextResponse.json({
    meta,
    data: paginatedProducts,
  });
}
