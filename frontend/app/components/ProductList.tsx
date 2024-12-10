"use client";

import { useState, useEffect } from "react";
import { fetchProducts, Product } from "../api/productsApi";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.log("Unable to retrieve products");
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="products"
      className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-center">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <p className="text-indigo-800 font-bold">${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
