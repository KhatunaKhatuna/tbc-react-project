import Search from "../../Search";
import Prodacts from "../products/Products";
import Blog from "../blog/Blog";
import { useState } from "react";

export default function Home() {
  const [isSorted, setIsSorted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="">
      <Search
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Prodacts isSorted={isSorted} searchQuery={searchQuery} />
      <Blog quantity={5} />
    </main>
  );
}
