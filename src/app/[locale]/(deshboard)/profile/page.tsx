// import Title from "@/components/Title";
import AvatarUpload from "../../../../components/AvatarUpload";
// import { getSession } from "@auth0/nextjs-auth0";
import { getUserImage, getUserInfo } from "../../../api";
import ProfileInfo from "../../../../components/ProfileInfo";

export const metadata = {
  title: "Profile",
  description: "Profile by Next",
};

export default async function Profile() {
  // const session = await getSession();
  // const user = session?.user;
  const userImage = await getUserImage();
  const userInfo = await getUserInfo();

  return (
    <div className="px-[4%] py-24 flex justify-center items-center md:flex-col gap-20 md:gap-12">
      <div className="flex flex-col gap-3 justify-center items-center">
        <AvatarUpload userImage={userImage} />
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="flex border border-blue-500 p-4 xs:p-2 rounded-lg gap-8 xs:gap-3 shadow-lg bg-white items-baseline dark:bg-slate-900">
          <div className="flex flex-1 justify-center items-center"></div>
          <div className="font-bold text-blue-500 flex flex-col gap-4">
            {userInfo.name && (
              <h3 className="text-xl  leading-6 h-8">Full Name</h3>
            )}
            {/* {userInfo.nickname && (
              <h3 className="text-xl  leading-6 h-8">Nickname</h3>
            )}  */}
            {userInfo.email && <h3 className="text-xl leading-6 h-8">Email</h3>}
          </div>
          <ProfileInfo user={userInfo} />
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import { useLocale } from "next-intl";
// import AvatarUpload from "../../../../components/AvatarUpload";
// export default function Profile() {
//   const locale = useLocale();
//   const [form, setForm] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     mobile: "",
//     currentPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const {
//     firstname,
//     lastname,
//     email,
//     mobile,
//     currentPassword,
//     newPassword,
//     confirmNewPassword,
//   } = form;

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   return (
//     <section className="text-[#fdf2e9]  flex-1 flex  justify-center items-center ">
//       <div className="flex gap-5 flex-col justify-center items-center max-w-[80%] my-0 mx-auto">
//         <div className="bg-[#2D2E35] px-[2rem] py-[1rem] rounded-3xl">
//           <h2 className="text-[24px] leading-[25px] text-center pb-[1rem] ">
//             {locale === "en" ? "Your Profile Data" : "პროფილის მონაცემები"}
//           </h2>
//           <AvatarUpload />
//           <form className="grid grid-cols-1 gap-4">
//             <input
//               className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
//               maxLength={100}
//               name="firstname"
//               placeholder={locale === "en" ? "Firstname" : "სახელი"}
//               type="text"
//               autoCapitalize="none"
//               autoComplete="off"
//               spellCheck="false"
//               value={firstname}
//               onChange={handleChange}
//             />

//             <input
//               className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
//               maxLength={100}
//               name="lastname"
//               placeholder={locale === "en" ? "Lastname" : "გვარი"}
//               type="text"
//               autoCapitalize="none"
//               autoComplete="off"
//               spellCheck="false"
//               value={lastname}
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
//               maxLength={100}
//               name="email"
//               placeholder={locale === "en" ? "Email" : "იმეილი"}
//               type="text"
//               autoCapitalize="none"
//               autoComplete="off"
//               spellCheck="false"
//               value={email}
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
//               maxLength={100}
//               name="mobile"
//               placeholder={locale === "en" ? "Mobile" : "მობილური"}
//               type="text"
//               autoCapitalize="none"
//               autoComplete="off"
//               spellCheck="false"
//               value={mobile}
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
//               maxLength={100}
//               name="currentPassword"
//               placeholder={
//                 locale === "en" ? "Current Password" : "მიმდინარე პაროლი"
//               }
//               type="password"
//               autoCapitalize="none"
//               autoComplete="off"
//               spellCheck="false"
//               required
//               value={currentPassword}
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
//               maxLength={100}
//               name="newPassword"
//               placeholder={locale === "en" ? "New Password" : "ახალი პაროლი"}
//               type="password"
//               autoCapitalize="none"
//               autoComplete="off"
//               spellCheck="false"
//               required
//               value={newPassword}
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-1.5 text-[#0e0e0e]/95 rounded-[5px]  focus:border-[#6B72FE] focus:outline-[#6B72FE]"
//               maxLength={100}
//               name="confirmNewPassword"
//               placeholder={
//                 locale === "en"
//                   ? "Confirm New Password"
//                   : "დადასტურეთ ახალი პაროლი"
//               }
//               type="password"
//               autoCapitalize="none"
//               autoComplete="off"
//               spellCheck="false"
//               required
//               value={confirmNewPassword}
//               onChange={handleChange}
//             />
//             <div className="flex gap-3">
//               <button className=" w-full  border-0 bg-[#fdf2e9] py-1.5 mx-auto text-[#2D2E35] lg:text-[20px] rounded-[5px] hover:bg-[#bc4848] transition-all transform duration-300 ease-linear">
//                 {locale === "en" ? "Cancel" : "გაუქმება"}
//               </button>
//               <button className=" w-full  border-0 bg-[#6B72FE] py-1.5 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear">
//                 {locale === "en" ? "Save" : "შენახვა"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
