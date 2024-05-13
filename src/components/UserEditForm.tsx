"use client";
import { useRouter } from "next/navigation";
import { updateUserAction } from "../app/actions";
import { useState } from "react";
export default function UserEditForm({
  setOpenModal,
  user,
}: {
  setOpenModal: (openModal: boolean) => void;
  user: User;
}) {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
    age: user.age ? user.age : "",
  });

  const { name, email, age } = userData;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await updateUserAction(formData);
      setOpenModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#D1D1D1]/90 z-[999]">
      <form
        onSubmit={handleSubmit}
        className="w-1/5 border-2 border-[#6B72FE] bg-[#E5E1CC] dark:bg-[#E5E1CC] dark:border-[#6B72FE] shadow-xl shadow-[#6B72FE] dark:shadow-[#6B72FE] p-8 rounded-xl flex flex-col gap-5 justify-center items-center"
      >
        <input
          className="hidden w-full h-full border-2 border-[#6B72FE] py-3 pl-1 text-[#000] lg:text-[16px] rounded-[5px] focus:border-[#6B72FE] focus:outline-[#6B72FE]"
          type="text"
          name="id"
          placeholder="ID"
          value={user.id}
        />
        <input
          className="w-full h-full border-2 border-[#6B72FE] py-3 pl-1 text-[#000] lg:text-[16px] rounded-[5px] focus:border-[#6B72FE] focus:outline-[#6B72FE]"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-full border-2 border-[#6B72FE] py-3 pl-1 text-[#000] lg:text-[16px] rounded-[5px] focus:border-[#6B72FE] focus:outline-[#6B72FE]"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-full border-2 border-[#6B72FE] py-3 pl-1 text-[#000] lg:text-[16px] rounded-[5px] focus:border-[#6B72FE] focus:outline-[#6B72FE]"
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          onChange={handleChange}
          required
        />
        <div className="w-full flex gap-3">
          <button
            onClick={() => setOpenModal(false)}
            className="w-full h-full border-0 bg-[#ff0000] py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-[#ff4d4d] transition-all transform duration-300 ease-linear"
          >
            Cancel
          </button>
          <button
            className="w-full h-full border-0 bg-[#6B72FE] dark:bg-[#6B72FE] hover:bg-[#333B61] rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
