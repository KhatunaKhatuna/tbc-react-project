import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
export default function Header() {
  return (
    <header className="bg-[rgb(25,25,25)]/95 sticky top-0 z-10">
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
        <Navigation />
      </div>
    </header>
  );
}
