import ProductsList from "../../../../components/ProdactsList";
import { useLocale } from "next-intl";

export default function Products() {
  const locale = useLocale();
  return (
    <>
      <h2 className="text-[#0e0e0e]/80 dark:text-[#fdf2e9] text-center text-[2rem] mb-[3rem] mt-[3rem]">
        {locale === "en" ? "Products" : "პროდუქტები"}
      </h2>
      <ProductsList />;
    </>
  );
}
