import TextExpander from "./TextExpander";
import Image from "next/image";

export default function Article({ title, text, creatDate, image }) {
  return (
    <div className="border-b-2 border-[#060607] flex flex-col gap-4 max-w-[90%] my-0 mx-auto">
      <p className="text-[2rem] text-[#fdf2e9] cursor-pointer  ">
        <span className=" hover:text-[#6B72FE] ">{title}</span>
      </p>
      <div className="flex gap-5 items-center justify-center py-4">
        <Image
          src={image}
          alt="logo"
          className="h-[7rem] "
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-3 text-[#fdf2e9]">
          <span>{creatDate}</span>
          {/* <p className="text-[1.3rem]   pb-4">{text}</p> */}
          <TextExpander
            className="text-[1.3rem] pb-4"
            collapsedNumWords={35}
            buttonColor="#6B72FE"
            marginLeft="20px"
          >
            {text}
          </TextExpander>
        </div>
      </div>
    </div>
  );
}
