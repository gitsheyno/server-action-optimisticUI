import Image from "next/image";
import { fetchData, Product } from "../app/lib/data";

import styles from "./page.module.css";
import CreateForm from "./UI/form/create-form";
import { Suspense } from "react";
import Products from "./UI/products/Products";
export default async function Home() {
  const fetchedProducts = await fetchData();
  return (
    <>
      <header className={styles.header}>
        <h1>Warehouse</h1>
      </header>
      <main className={styles.main}>
        <CreateForm products={fetchedProducts} />
      </main>
    </>
  );
}
