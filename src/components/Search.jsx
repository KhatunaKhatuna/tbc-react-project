export default function Search() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="flex justify-center p-[3rem]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[30rem] bg-[#fdf2e9]/10 flex items-center py-[0.8rem] px-[1.6rem] rounded-full "
      >
        <input
          type="text"
          placeholder="Search ..."
          className="focus:border-transparent focus:outline-none bg-transparent text-[#fdf2e9] text-lg w-full placeholder:text-[#fdf2e9]"
        />
        <button className="w-8 h-8 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#fddddd"
            className="w-8 h-8 group-hover:stroke-[#6B72FE]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
