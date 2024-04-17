"use client";
import Search from "@/components/Search";
import ProductsList from "@/components/ProdactsList";
import { useState } from "react";

export default function Home() {
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Search
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductsList isSorted={isSorted} searchQuery={searchQuery} />
    </>
  );
}
