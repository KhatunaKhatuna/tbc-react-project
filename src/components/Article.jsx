export function Article({ title, text }) {
  return (
    <div className="border-b border-[#5262ac] flex flex-col gap-2 max-w-[90%] my-0 mx-auto">
      <p className="text-[2rem] text-[#060607] cursor-pointer  ">
        <span className="hover:px-8 hover:py-2 hover:border border-[#5262ac] ">
          {title}
        </span>
      </p>
      <p className="text-[1.3rem] text-[#060607]  pb-4">{text}</p>
    </div>
  );
}
