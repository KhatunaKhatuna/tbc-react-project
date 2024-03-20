import logo from "../../../logo.svg";
export default function Contact() {
  return (
    <section className="text-[#fdf2e9] flex-1 ">
      <div className="max-w-[90%] my-0 mx-auto flex flex-col gap-20 pt-[3rem] pb-[3rem]">
        <h2 className="text-[2.5rem]">Get in touch</h2>
        <div className="grid gap-16 md:gap-10 grid-cols-1 md:grid-cols-2 ">
          <div className=" flex flex-col gap-5 justify-self-center">
            <div className="flex gap-5 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:stroke-[#6B72FE] transition-all transform duration-300 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <a
                className="text-[1.2rem] group-hover:text-[#6B72FE] transition-all transform duration-300 ease-linear"
                href="tel:+15151515151 "
              >
                +15151515151
              </a>
            </div>
            <div className="flex gap-5 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:stroke-[#6B72FE] transition-all transform duration-300 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <a
                className="text-[1.2rem] group-hover:text-[#6B72FE] transition-all transform duration-300 ease-linear"
                href="mailto:example@example.com"
              >
                example@example.com
              </a>
            </div>
            <div className="flex gap-5 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:stroke-[#6B72FE] transition-all transform duration-300 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="text-[1.2rem] group-hover:text-[#6B72FE] transition-all transform duration-300 ease-linear">
                address example
              </span>
            </div>
          </div>

          <form className=" grid gap-4 grid-cols-2 max-w-[80%] justify-self-center md:justify-self-end">
            <input
              className="w-full p-3 text-[#0e0e0e]/95 rounded-[5px]  col-span-2 md:col-span-1 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              type="text"
              name="firstName"
              placeholder="Firstname"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
            />
            <input
              className="w-full p-3 text-[#0e0e0e]/95 rounded-[5px] col-span-2 md:col-span-1 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              type="text"
              name="lastName"
              placeholder="Lastname"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
            />
            <input
              className="w-full p-3 text-[#0e0e0e]/95 rounded-[5px] col-span-2 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              type="text"
              name="mobile"
              placeholder="Mobile"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
            />
            <input
              className="w-full p-3 text-[#0e0e0e]/95 rounded-[5px] col-span-2 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              type="email"
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
            />
            <button className=" w-full col-span-2 border-0 bg-[#6B72FE] py-3 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
