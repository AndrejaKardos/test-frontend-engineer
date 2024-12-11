"use client";

import { FC } from "react";
import { addProductToCart, Product } from "../api/productsApi";

const ProductCard: FC<Product> = ({ id, title, price, image }) => {
  return (
    <div className="w-[300px] h-[450px] mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col bg-white">
      <div className="flex justify-center items-center p-4 h-[250px] bg-white">
        <img
          src={image}
          alt={title}
          className="object-contain w-full max-h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-between p-4 flex-grow">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-lg font-semibold text-indigo-600">
          {price.toFixed(2)}
        </p>
        <button
          onClick={() => addProductToCart(id, 1)}
          className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
