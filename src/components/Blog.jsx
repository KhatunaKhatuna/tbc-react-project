import { Article } from "./Article";

export default function Blog() {
  const articles = [];
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut possimus necessitatibus error neque ex ipsa repudiandae debitis maxime laboriosam non vero culpa nisi illum ad sapiente, laudantium iste iureEaque.";
  for (let index = 1; index <= 6; index++) {
    articles.push({
      id: Math.random() * Math.random(),
      title: `Article ${index}`,
      text,
    });
  }

  return (
    <section className="mb-[3rem]">
      <div className="max-w-[90%] my-0 mx-auto bg-[#2D2E35] rounded-3xl py-[2rem] flex flex-col gap-6">
        <h2 className="text-[3rem] text-[#060607] text-center py-5">Blog</h2>
        {articles.map((article) => (
          <Article key={article.id} text={article.text} title={article.title} />
        ))}
      </div>
    </section>
  );
}
