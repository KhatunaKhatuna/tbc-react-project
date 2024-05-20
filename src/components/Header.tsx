import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import LogoutButton from "./LogoutButton";
// import { logOut } from "@/app/actions";
import LangSwitcher from "./LangSwitcher";
import DarkMode from "./DarkMode";

export default function Header() {
  // async function handleLogout() {
  //   "use server";
  //   await logOut();
  // }
  return (
    <header className=" bg-[#D1D1D1] dark:bg-[rgb(25,25,25)]/95 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-[80%] my-0 mx-auto py-[0.5rem]">
        <Link href="/">
          <Image
            className="h-12"
            src="/logo.svg"
            alt="logo"
            width="100"
            height="100"
          />
        </Link>

        <Navigation style="flex-row" />
        <div className="flex gap-5 items-center">
          <LangSwitcher />
          <DarkMode />
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
