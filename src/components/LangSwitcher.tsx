"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
// import Link from "next/link";
const LangSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const path = usePathname();

  // let langEn = "";
  // let langKa = "";

  // if (pathname === "/en") {
  //   langKa = "/ka";
  // } else if (pathname === "/ka") {
  //   langEn = "/en";
  // } else {
  //   if (locale === "en") {
  //     langKa = pathname.replace("/en/", "/ka/");
  //   } else if (locale === "ka") {
  //     langEn = pathname.replace("/ka/", "/en/");
  //   }
  // }
  const handleClick = (lang: string) => {
    const nextLocale = lang;
    // window.localStorage.setItem('locale', nextLocale);
    router.replace(`/${nextLocale}/${path}`);
  };
  return (
    <div className="cursor-pointer">
      <button
        onClick={() => handleClick("en")}
        className={`p-3 text-[20px] hover:text-[#6B72FE] transition-all transform duration-300 ease-linear ${
          locale === "en" ? "text-[#6B72FE]" : ""
        }`}
      >
        en
      </button>{" "}
      |
      <button
        onClick={() => handleClick("ka")}
        className={`p-3 text-[20px] hover:text-[#6B72FE] transition-all transform duration-300 ease-linear ${
          locale === "ka" ? "text-[#6B72FE]" : ""
        }`}
      >
        ka
      </button>
      {/* <Link
        href={`${langEn}`}
        className={`p-3 text-[20px] hover:text-[#6B72FE] transition-all transform duration-300 ease-linear ${
          locale === "en" ? "text-[#6B72FE]" : ""
        }`}
      >
        en
      </Link>{" "}
      |
      <Link
        href={`${langKa}`}
        className={`p-3 text-[20px] hover:text-[#6B72FE] transition-all transform duration-300 ease-linear ${
          locale === "ka" ? "text-[#6B72FE]" : ""
        }`}
      >
        ka
      </Link> */}
    </div>
  );
};

export default LangSwitcher;
