"use client";

import { useState, useEffect } from "react";
import { fetchProducts, Product } from "../api/productsApi";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <section
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
