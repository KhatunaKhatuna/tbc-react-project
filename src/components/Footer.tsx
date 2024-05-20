import Navigation from "./Navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SubscribtionForm from "./SubscribtionForm";
import Year from "./Year";

export default function Footer() {
  const t = useTranslations("Index");

  return (
    <footer className="bg-[#D1D1D1] dark:bg-[rgb(25,25,25)]/95 lg:bottom-0 lg:z-10 text-[#fdf2e9]">
      <div className=" max-w-[80%] my-0 mx-auto py-[1rem] grid  grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 ">
        <div className="w-full max-w-[30rem] order-2 lg:order-1 lg:justify-self-start">
          <div className="flex  gap-5 justify-between lg:justify-normal lg:gap-32 flex-row ">
            <ul className="flex flex-col gap-[2px] text-lg  text-[16px] text-[#0e0e0e] dark:text-[#fdf2e9]   font-medium">
              <li>
                <span className="hover:text-[#5262ac] transition duration-300">
                  React Accelerator <Year />
                </span>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5262ac] transition duration-300"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5262ac] transition duration-300"
                >
                  {t("terms")}
                </Link>
              </li>
            </ul>
            <Navigation style="flex-col gap-[2px] text-[16px]" />
          </div>
        </div>
        <div className=" order-1 lg:order-2 flex flex-col justify-center items-center lg:justify-self-end">
          <SubscribtionForm />
        </div>
      </div>
    </footer>
  );
}
//
