import TextExpander from "./TextExpander";
import Image from "next/image";
import Link from "next/link";

import { useLocale } from "next-intl";

export default function Article({
  article: { id, title, body },
}: articleProps) {
  const locale = useLocale();
  const createDate = "28.03.2024";
  const image = "/logo.svg";

  return (
    <div className="border-b-2 border-[#060607] flex flex-col gap-4 max-w-[80%] my-0 mx-auto">
      <p className="text-[1.5rem] text-[#0e0e0e] dark:text-[#fdf2e9] ">
        <Link
          href={"/blog/" + id}
          className=" hover:text-[#6B72FE]  cursor-pointer  "
        >
          {title}
        </Link>
      </p>
      <div className="flex gap-5 items-center justify-center py-4">
        <Image
          src={image}
          alt="logo"
          className="h-[9rem] "
          width="200"
          height="200"
        />
        <div className="flex flex-col gap-3 text-[#0e0e0e] dark:text-[#fdf2e9]">
          <span>{createDate}</span>
          {/* <p className="text-[1rem]   pb-4">{body}</p> */}
          <TextExpander
            className="text-[1.3rem] pb-4"
            collapsedNumWords={35}
            buttonColor="#6B72FE"
            marginLeft="20px"
            expandButtonText={locale === "en" ? "Show more" : "მეტის ჩვენება"}
            colapsButtonText={
              locale === "en" ? "Show less" : "ნაკლების ჩვენება"
            }
          >
            {body}
          </TextExpander>
        </div>
      </div>
    </div>
  );
}
