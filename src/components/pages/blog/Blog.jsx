import Article from "../../Article";
import { useLocation } from "react-router-dom";
import logo from "../../../logo.svg";

export default function Blog({ quantity = 20 }) {
  const location = useLocation();

  const articles = [];
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut possimus necessitatibus error neque ex ipsa repudiandae debitis maxime laboriosam non vero culpa nisi illum ad sapiente, laudantium iste iureEaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut possimus necessitatibus error neque ex ipsa repudiandae debitis maxime laboriosam non vero culpa nisi illum ad sapiente, laudantium iste iureEaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut possimus necessitatibus error neque ex ipsa repudiandae debitis maxime laboriosam non vero culpa nisi illum ad sapiente, laudantium iste iureEaque.";

  for (let index = 1; index <= quantity; index++) {
    articles.push({
      id: index,
      title: `Article ${index}`,
      text,
    });
  }

  return (
    <section className="mb-[3rem]">
      <div className="max-w-[90%] my-0 mx-auto bg-[#2D2E35] rounded-3xl py-[2rem]">
        <h2 className="text-[3rem] text-[#060607] text-center">Blog</h2>
        <div className=" flex flex-col gap-14">
          {articles.map((article) => (
            <Article
              key={article.id}
              text={article.text}
              title={article.title}
              creatDate={"28.03.2024"}
              image={logo}
            />
          ))}
          {location.pathname === "/" ? (
            <button className=" border-0 bg-[#6B72FE] py-1.5 px-6 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear ">
              Load More
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
