"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function ClientView() {
  return (
    <main className={styles.main}>
      <p>Client View</p>
      <Image className={styles.image} alt="Zoom Products" src="/zoom-products.png" width={600} height={300} />
    </main>
  );
}
