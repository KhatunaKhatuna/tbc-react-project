import Search from "../../Search";
import Prodacts from "../products/Products";
import Blog from "../../Blog";

export default function Home() {
  return (
    <main className="">
      <Search />
      <Prodacts />
      <Blog />
    </main>
  );
}
