import Navigation from "./Navigation";
import Link from "next/link";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[rgb(25,25,25)]/95 lg:bottom-0 lg:z-10 text-[#fdf2e9]">
      <div className=" max-w-[80%] my-0 mx-auto py-[1rem] grid  grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 ">
        <div className="w-full max-w-[30rem] order-2 lg:order-1 lg:justify-self-start">
          <div className="flex  gap-5 justify-between lg:justify-normal lg:gap-32 flex-row ">
            <ul className="flex flex-col gap-[2px] text-lg  text-[16px] text-[#fdf2e9]   font-medium">
              <li>
                <span className="hover:text-[#5262ac] transition duration-300">
                  React Accelerator {year}
                </span>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5262ac] transition duration-300"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5262ac] transition duration-300"
                >
                  Terms
                </Link>
              </li>
            </ul>
            <Navigation style="flex-col gap-[2px] text-[16px]" />
          </div>
        </div>
        <div className=" order-1 lg:order-2 flex flex-col justify-center items-center lg:justify-self-end">
          <form className="bg-[#fdf2e9] w-full max-w-[30rem] flex items-center py-[0.2rem]  pl-[1.6rem]  pr-[0.6rem] rounded-full gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6B72FE "
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input
              type="email"
              name="email"
              required
              className="focus:border-transparent focus:outline-none bg-transparent text-[#0e0e0e]/95 text-lg w-full"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              placeholder="Enter your email"
            />
            <button className=" bg-[#6B72FE]  text-nowrap py-[0.6rem] px-[1.6rem] rounded-full hover:bg-[#333B61]">
              Get Updates
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
//
