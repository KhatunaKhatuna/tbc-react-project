import { useLocale } from "next-intl";
import { searchProps } from "../../types";
export default function Search({
  isSorted,
  setIsSorted,
  setSearchQuery,
  searchQuery,
}: searchProps) {
  const locale = useLocale();

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  function handleClick() {
    setIsSorted((prev: boolean) => !prev);
  }

  const pattern = /[^a-zA-Z0-9]/g;
  // set search query
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value).replace(pattern, "");
  }

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-[3rem] pb-0">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[30rem] bg-[#D1D1D1] dark:bg-[#fdf2e9]/10  flex  items-center py-[0.6rem] px-[1.6rem] rounded-full "
      >
        <input
          value={searchQuery}
          onChange={handleChange}
          type="text"
          name="search"
          placeholder={locale === "en" ? "Search..." : "ძებნა ..."}
          className="focus:border-transparent focus:outline-none bg-transparent text-[#0e0e0e] dark:text-[#fdf2e9] text-lg w-full placeholder:text-[#0e0e0e]/60 dark:placeholder:text-[#fdf2e9]"
          autoCapitalize="none"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
      <button
        onClick={handleClick}
        className=" dark:text-[#fdf2e9] bg-[#6B72FE]  dark:bg-[#fdf2e9]/10 py-[0.7rem] px-[1.7rem] rounded-full w-[250px]"
      >
        {isSorted
          ? locale === "en"
            ? "Reset"
            : "გადატვირთვა"
          : locale === "en"
          ? "Sort by title"
          : "დალაგება სათურით"}
      </button>
    </section>
  );
}
