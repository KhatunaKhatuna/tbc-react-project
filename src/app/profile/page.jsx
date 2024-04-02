"use client";
import { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const {
    firstname,
    lastname,
    email,
    mobile,
    currentPassword,
    newPassword,
    confirmNewPassword,
  } = form;

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  console.log(form);
  return (
    <section className="text-[#fdf2e9]  flex-1 flex  justify-center items-center ">
      <div className="flex gap-5 flex-col justify-center items-center max-w-[90%] my-0 mx-auto">
        <div className="bg-[#2D2E35] px-[2rem] py-[1rem] rounded-3xl">
          <h2 className="text-[2rem] leading-[25px] text-center pb-[1rem] ">
            Edit Your Profile Data
          </h2>
          <form className="grid grid-cols-1 gap-4">
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="firstname"
              placeholder="Firstname"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              value={firstname}
              onChange={handleChange}
            />

            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="lastname"
              placeholder="Lastname"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              value={lastname}
              onChange={handleChange}
            />
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="email"
              placeholder="Email"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              value={email}
              onChange={handleChange}
            />
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="mobile"
              placeholder="Mobile"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              value={mobile}
              onChange={handleChange}
            />
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="currentPassword"
              placeholder="Current Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
              value={currentPassword}
              onChange={handleChange}
            />
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="newPassword"
              placeholder="New Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
              value={newPassword}
              onChange={handleChange}
            />
            <input
              className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
              maxLength="100"
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck="false"
              required
              value={confirmNewPassword}
              onChange={handleChange}
            />
            <div className="flex gap-3">
              <button className=" w-full  border-0 bg-[#fdf2e9] py-1.5 mx-auto text-[#2D2E35] lg:text-[20px] rounded-[5px] hover:bg-[#bc4848] transition-all transform duration-300 ease-linear">
                Cancel
              </button>
              <button className=" w-full  border-0 bg-[#6B72FE] py-1.5 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
