import { useState } from "react";

export default function Search({
  isSorted,
  setIsSorted,
  setSearchQuery,
  searchQuery,
  setIsResults,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClick() {
    setIsSorted((prev) => !prev);
  }

  function handleChange(e) {
    setSearchQuery((prev) => (prev = e.target.value));
  }
  return (
    <section className="flex justify-center  gap-10 p-[3rem] pb-0">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[30rem] bg-[#fdf2e9]/10 flex  items-center py-[0.6rem] px-[1.6rem] rounded-full "
      >
        <input
          value={searchQuery}
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Search ..."
          className="focus:border-transparent focus:outline-none bg-transparent text-[#fdf2e9] text-lg w-full placeholder:text-[#fdf2e9]"
          autoCapitalize="none"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
      <button
        onClick={handleClick}
        className=" text-[#fdf2e9] bg-[#fdf2e9]/10 py-[0.6rem] px-[1.6rem] rounded-full w-[150px]"
      >
        {isSorted ? "Reset" : "Sort by title"}
      </button>
    </section>
  );
}
