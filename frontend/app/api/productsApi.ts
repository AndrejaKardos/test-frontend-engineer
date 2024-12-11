export interface Product {
  id: number;
  title: string;
  price: number;
  category?: string;
  description?: string;
  image: string;
}

export interface CartProduct {
  productId: number;
  quantity: number;
}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}

const API_URL = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products/`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    alert(error instanceof Error ? error.message : "Error retrieving products");
    return [];
  }
};

export const addProductToCart = async (
  productId: number,
  quantity: number
): Promise<Cart | undefined> => {
  try {
    const response = await fetch(`${API_URL}/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1, // Hard-coded for now as we only have one user
        date: new Date().toISOString(),
        products: [{ productId, quantity }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: Cart = await response.json();

    return data;
  } catch (error) {
    alert(
      error instanceof Error ? error.message : "Error adding product to cart"
    );
    return undefined;
  }
};

