"use client";

import { useState } from "react";

const temporaryHardcodedProducts = [
  {
    id: 1,
    title: "Best Floof",
    price: 6.5,
    category: "Category 1",
    description: "This is a description for Product 1.",
    image:
      "https://wallpapers.com/images/featured/cute-coffee-68iaeq3dbhrtw3v3.jpg",
  },
  {
    id: 2,
    title: "Best Floof",
    price: 4999.99,
    category: "Category 2",
    description: "This is a description for Product 2.",
    image:
      "https://kb.rspca.org.au/wp-content/uploads/2024/01/ferret-close-up.jpg",
  },
  {
    id: 3,
    title: "Best Snack",
    price: 19.99,
    category: "Category 3",
    description: "This is a description for Product 3.",
    image:
      "https://msshiandmrhe.com/wp-content/uploads/2023/10/Image_20231013175926-500x500.jpg",
  },
];

const ProductList = () => {
  const [products] = useState(temporaryHardcodedProducts);

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
