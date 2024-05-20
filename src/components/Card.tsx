import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Card({
  // card: { id, description, title, images },
  card,
  handleClick,
}: cardProps) {
  const { id, description, title, images } = card;
  const locale = useLocale();
  const img = images[0];
  return (
    <div className="overflow-hidden flex flex-col pb-6  items-center text-base text-[#0e0e0e] dark:text-[#fdf2e9]  dark:bg-[#16171E] rounded-[10px] cursor-pointer dark:hover:bg-[#222639] hover:scale-105  transition duration-300 ease-linear snap-start shadow-2xl">
      <Link href={"/products/" + id} className="flex-1 pb-5">
        <div className="flex flex-col gap-5 ">
          <div className="h-[200px] w-full">
            <Image
              src={img}
              alt="logo"
              width="500"
              height="500"
              className=" h-full w-full object-cover"
            />
          </div>

          <p className="text-[22px] px-5 ">{title}</p>
          <p className="px-5 text-[14px]"> {description}</p>
        </div>
      </Link>
      <button
        onClick={() => handleClick(card)}
        className="flex justify-center w-[90%] gap-3 items-center bg-[#D1D1D1] dark:bg-[#2D2E35] py-[0.6rem] px-[1.6rem] rounded-full text-[16px] text-[#5262ac] group hover:bg-[#6B72FE]  hover:text-[#0e0e0e] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="#5262ac"
          className="w-6 h-6 group-hover:stroke-[#0e0e0e]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {locale === "en" ? "Add to cart" : "კალათაში დამატება"}
      </button>
    </div>
  );
}
