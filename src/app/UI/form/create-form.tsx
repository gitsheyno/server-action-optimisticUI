import styles from "./form.module.css";
import { addProduct } from "@/app/lib/actions";
export default function CreateForm() {
  return (
    <form action={addProduct} className={styles.form}>
      <input type="text" name="product" placeholder="Add product" />
      <input type="number" name="price" placeholder="Add price" />
      <button type="submit">Add your new Product</button>
    </form>
  );
}
