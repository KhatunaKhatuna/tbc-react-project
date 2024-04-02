import Image from "next/image";

export default function Card({ card: { description, title } }) {
  return (
    <div className="bg-[#16171E] rounded-[10px] cursor-pointer hover:bg-[#222639] hover:scale-105  transition duration-300 ease-linear snap-start">
      <Image src="/logo.svg" alt="logo" width={300} height={300} />

      <div className="text-[#fdf2e9] text-base flex flex-col justify-center gap-4 items-center max-w-[90%] my-0 mx-auto pt-4 pb-8">
        <p className="text-[24px]">{title}</p>
        <p className="flex-1 min-h-[50px]"> {description}</p>
        <button className="flex justify-center gap-3 items-center bg-[#2D2E35] w-full   py-[0.6rem] px-[1.6rem] rounded-full text-[24px] text-[#5262ac] group hover:bg-[#6B72FE]  hover:text-[#0e0e0e] ">
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
          Edd to cart
        </button>
      </div>
    </div>
  );
}
