import { unstable_noStore as noStore } from "next/cache";

export type Product = {
  id?: number;
  product: string;
  price: string;
};
export const fetchData = async () => {
  noStore();
  const data = await fetch(
    "https://6548b491dd8ebcd4ab236d94.mockapi.io/products"
  );

  return data.json();
};

export const postData = async (body: Product) => {
  noStore();

  await fetch("https://6548b491dd8ebcd4ab236d94.mockapi.io/products", {
    method: "POST",
    headers: {
      "Content-Type": "applicaiton/json",
    },
    body: JSON.stringify(body),
  });
};
