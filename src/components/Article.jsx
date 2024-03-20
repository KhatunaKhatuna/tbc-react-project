export function Article({ title, text }) {
  return (
    <div className="border-b-2 border-[#060607] flex flex-col gap-2 max-w-[90%] my-0 mx-auto">
      <p className="text-[2rem] text-[#fdf2e9] cursor-pointer  ">
        <span className="hover:px-8 hover:py-2 hover:border border-[#060607] ">
          {title}
        </span>
      </p>
      <p className="text-[1.3rem] text-[#fdf2e9]  pb-4">{text}</p>
    </div>
  );
}
