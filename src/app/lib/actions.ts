"use server";
import { Product } from "./data";
import { postData } from "./data";
import { revalidatePath } from "next/cache";

export async function addProduct(formData: FormData) {
  const product = formData.get("product")?.toString();
  const price = formData.get("price")?.toString();

  // if (!product || !price) return;

  const newPRoduct: Product = {
    id: new Date().toISOString(),
    product: product as string,
    price: price as string,
  };

  await postData(newPRoduct);
  revalidatePath("/");
}
