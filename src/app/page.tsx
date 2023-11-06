import Image from "next/image";
import styles from "./page.module.css";
import CreateForm from "./UI/form/create-form";
import { Suspense } from "react";
import Products from "./UI/products/Products";
export default async function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>Warehouse</h1>
      </header>
      <main className={styles.main}>
        <CreateForm />
      </main>
      <Suspense fallback={<h1>...Loading</h1>}>
        {/* @ts-expect-error server component */}
        <Products />
      </Suspense>
    </>
  );
}
