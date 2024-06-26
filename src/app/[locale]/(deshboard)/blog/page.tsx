import Article from "../../../../components/Article";
import { useLocale } from "next-intl";

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default async function Blog() {
  const locale = useLocale();
  const posts: post[] = await fetchData();

  return (
    <section className="mb-[3rem] mt-[3rem]">
      <div className="max-w-[80%] my-0 mx-auto  bg-[#D1D1D1] dark:bg-[#2D2E35] rounded-3xl py-[2rem]">
        <h2 className="text-[3rem] text-[#6B72FE] text-center">
          {locale === "en" ? "Blog" : "ბლოგი"}
        </h2>
        <div className=" flex flex-col gap-14">
          {posts?.map((article: post) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
