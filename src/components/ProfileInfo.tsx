"use client";
import { editProfileInfo } from "../app/actions";
import { useState } from "react";
import { ProfileData } from "../../types";

interface UserInfoDb {
  name: string;
  email: string;
  sub: string;
  image_url: string;
}

export default function ProfileInfo({ user }: { user: UserInfoDb }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  // const [editProfileMessage, setEditProfileMessage] = useState(false);
  const userSub = user?.sub;

  // console.log(user);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: ProfileData = {
      name,
      email,
      userSub,
    };
    try {
      await editProfileInfo(formData);
      // setEditProfileMessage(true);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form className="text-gray-700 flex flex-col gap-4" onSubmit={handleSubmit}>
      {name && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-lg leading-6 p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
        />
      )}
      {email && (
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-lg leading-6  opacity-50 p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
          readOnly
        />
      )}
      {/* {editProfileMessage && <p>განახლდაა</p>} */}
      <button type="submit" className="text-lg leading-6 h-8">
        Submit
      </button>
    </form>
  );
}
