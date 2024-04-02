"use client";
import Search from "@/components/Search";
import Products from "./products/page";
import Blog from "./blog/page";
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
      <Products isSorted={isSorted} searchQuery={searchQuery} />
      <Blog quantity={5} />
    </>
  );
}