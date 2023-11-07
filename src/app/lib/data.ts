import { unstable_noStore as noStore } from "next/cache";

export type Product = {
  id?: number | string;
  product: string;
  price: string;
};
export const fetchData = async () => {
  noStore();
  const data = await fetch("http://localhost:8000/products");

  return data.json();
};

export const postData = async (body: Product) => {
  noStore();

  console.log(body);

  const res = await fetch("http://localhost:8000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
};
