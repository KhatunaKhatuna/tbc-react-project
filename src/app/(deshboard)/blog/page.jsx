import Article from "@/components/Article";

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
  const posts = await fetchData();

  return (
    <section className="mb-[3rem]">
      <div className="max-w-[80%] my-0 mx-auto bg-[#2D2E35] rounded-3xl py-[2rem]">
        <h2 className="text-[3rem] text-[#6B72FE] text-center">Blog</h2>
        <div className=" flex flex-col gap-14">
          {posts?.map((article) => (
            <Article key={article.id} article={article} />
          ))}

          {/* <button className=" border-0 bg-[#6B72FE] py-1.5 px-6 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear ">
            Load More
          </button>*/}
        </div>
      </div>
    </section>
  );
}
