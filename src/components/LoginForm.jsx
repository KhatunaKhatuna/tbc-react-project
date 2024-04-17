"use client";
import { useState } from "react";

export default function LoginForm({ handleLogin }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  function handleChange(e) {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="text-[#fdf2e9]  flex-1 flex  justify-center items-center ">
      <div className="flex gap-5 flex-col justify-center items-center max-w-[80%] my-0 mx-auto">
        <div className="bg-[#2D2E35] px-[2rem] py-[1rem] rounded-3xl">
          <h2 className="text-[2rem] leading-[25px] text-center pb-[1rem] ">
            Login
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="grid grid-cols-1 gap-4"
          >
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="username"
              placeholder="Username"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              value={username}
              onChange={handleChange}
            />

            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
              value={password}
              onChange={handleChange}
            />

            <div className="flex gap-3">
              <button
                onClick={() => handleLogin(username, password)}
                className=" w-full  border-0 bg-[#6B72FE] py-1.5 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
