"use client";
import { useState } from "react";
import { Products } from "./components/products";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

export default function Home() {
  const [word, setWord] = useState("");
  const [productsFilter] = useState<string[]>(["test", "b"]);

  const searchProducts = (data: any) => {
    if (!word) return data; // Return all data if search is empty
    return data.filter((item: any) =>
      productsFilter.some((filter) =>
        item[filter]?.toString().toLowerCase().includes(word.toLowerCase())
      )
    );
  };
  return (
    <>
      <Nav word={word} setWord={setWord} />
      <Products searchProducts={searchProducts} />
      <Footer />
    </>
  );
}
