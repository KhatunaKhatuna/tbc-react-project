import { useTranslations } from "next-intl";
export default function SubscribtionForm() {
  const t = useTranslations("Index");
  return (
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
        placeholder={t("email") + " ..."}
      />
      <input
        type="submit"
        className=" bg-[#6B72FE]  text-nowrap py-[0.6rem] px-[1.6rem] rounded-full hover:bg-[#333B61]"
        value={t("getOurUpdates")}
      />
    </form>
  );
}
