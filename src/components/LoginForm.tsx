// "use client";
// import { useState } from "react";
import { useLocale } from "next-intl";

export default function LoginForm() {
  const locale = useLocale();
  // const [loginData, setLoginData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const { username, password } = loginData;

  // function handleChange(e) {
  //   setLoginData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!username || !password) return;
  //   handleLogin(username, password);
  //   setLoginData({
  //     username: "",
  //     password: "",
  //   });
  // }

  return (
    <section className="text-[#fdf2e9] flex  justify-center items-center mt-[200px]">
      <div className="flex gap-5 flex-col justify-center items-center max-w-[80%] my-0 mx-auto">
        <div className="bg-[#2D2E35] px-[2rem] py-[1rem] rounded-3xl">
          <form action="/api" method="POST" className="grid grid-cols-1 gap-4">
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength={100}
              name="username"
              placeholder="Username"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              // value={username}
              // onChange={handleChange}
            />

            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength={100}
              name="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
              // value={password}
              // onChange={handleChange}
            />

            <div className="flex gap-3">
              <button className=" w-full  border-0 bg-[#6B72FE] py-1.5 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear">
                {locale === "en" ? "Log In" : "შესვლა"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
