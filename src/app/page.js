"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image alt="Zoom Products" src="/zoom-products.png" width={600} height={300} />
      <p>Zoom Developer Ecosystem</p>
      <p>
        <Link href="/client-view" className={styles.button}>
          Client View
        </Link>
        <Link href="/component-view" className={styles.button}>
          Component View
        </Link>
      </p>
    </main>
  );
}
