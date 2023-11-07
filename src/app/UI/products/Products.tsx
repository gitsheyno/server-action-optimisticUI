import { fetchData, Product } from "../../lib/data";
import styles from "../../page.module.css";
export default async function Products({
  optimisticMessages,
}: {
  optimisticMessages: Product[];
}) {
  // const fetchedProducts: Product[] = await fetchData();

  return (
    <section className={styles.section}>
      {optimisticMessages.map((product) => {
        return (
          <article className={styles.article} key={product.id}>
            <p> {product?.product}</p>
            <span> $ {product.price}</span>
          </article>
        );
      })}
    </section>
  );
}
