import { useLocale } from "next-intl";
export default function LoginErrorMessage() {
  const locale = useLocale();
  return (
    <div className="text-red-700 text-[1.5rem] mt-5 flex  justify-center items-center">
      {locale === "en"
        ? "incorrect username or password"
        : "არასწორი სახელი ან პაროლი"}
    </div>
  );
}
