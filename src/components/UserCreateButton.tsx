"use client";
import UserCreateForm from "./UserCreateForm";
import { useState } from "react";
// import UserCreateForm from "./UserCreateForm";

export default function UserCreateButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-fit bg-[#D1D1D1] dark:bg-[#6B72FE] hover:bg-[#333B61] hover:text-[#fff] rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
      >
        Add User
      </button>
      {openModal ? <UserCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
}
