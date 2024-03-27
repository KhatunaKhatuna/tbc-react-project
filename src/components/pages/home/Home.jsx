import Search from "../../Search";
import Prodacts from "../products/Products";
import Blog from "../blog/Blog";

export default function Home() {
  return (
    <main className="">
      <Search />
      <Prodacts />
      <Blog quantity={5} />
    </main>
  );
}
