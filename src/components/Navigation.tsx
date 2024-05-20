import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navigation({ style }: { style: string }) {
  const t = useTranslations("Index");
  return (
    <nav className="">
      <ul
        className={
          "flex text-[#0e0e0e] dark:text-[#fdf2e9]  gap-4 text-lg font-medium " +
          style
        }
      >
        <li>
          <Link
            href="/"
            className="hover:text-[#5262ac] transition duration-300"
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:text-[#5262ac] transition duration-300"
          >
            {t("products")}
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-[#5262ac] transition duration-300"
          >
            {t("contact")}
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover:text-[#5262ac] transition duration-300"
          >
            {t("blog")}
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
            className="hover:text-[#5262ac] transition duration-300"
          >
            {t("admin")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
