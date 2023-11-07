"use client";
import { Product } from "../../lib/data";
import Products from "../products/Products";
import styles from "./form.module.css";
import { addProduct } from "@/app/lib/actions";
import { useOptimistic } from "react";
import { Suspense } from "react";

export default function CreateForm({ products }: { products: Product[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    products,
    (state: Product[], newProduct: Product) => [...state, newProduct]
  );
  return (
    <>
      <form
        action={async (formData: FormData) => {
          // const newProduct = await addProduct(formData);
          const product = formData.get("product")?.toString();
          const price = formData.get("price")?.toString();
          addOptimisticMessage({
            product: product as string,
            price: price as string,
          });
          await addProduct(formData);
        }}
        className={styles.form}
      >
        <input type="text" name="product" placeholder="Add product" />
        <input type="number" name="price" placeholder="Add price" />
        <button type="submit">Add your new Product</button>
      </form>
      <Suspense>
        <Products optimisticMessages={optimisticMessages} />
      </Suspense>
    </>
  );
}
