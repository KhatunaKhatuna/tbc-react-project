"use client";
import { useLocale } from "next-intl";
export default function LogInButton() {
  const locale = useLocale();
  return (
    <form action="/api/auth/login" method="GET">
      <button className="border-0 bg-[#6B72FE] py-1 px-2 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear">
        {locale === "en" ? "LogIn" : "შესვლა"}
      </button>
    </form>
  );
}
