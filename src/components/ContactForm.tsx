"use client";

import { useLocale } from "next-intl";

export default function ContactForm() {
  const locale = useLocale();
  // const [form, setForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   mobile: "",
  //   email: "",
  // });
  // const [subscribers, setSubscribers] = useState<form[]>([]);
  // console.log(subscribers);
  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  // [e.target.name] here name is inputs name
  /*
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    */
  //  OR
  //   setForm((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  // function handleAddsubscribers(subscriber: form) {
  //   setSubscribers((subscribers) => [...subscribers, subscriber]);
  // }

  // function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   handleAddsubscribers(form);
  //   setForm({
  //     firstName: "",
  //     lastName: "",
  //     mobile: "",
  //     email: "",
  //   });
  // }

  return (
    <form
      className=" grid gap-4 grid-cols-2  max-w-[60%] justify-self-center lg:justify-self-start"
      // onSubmit={handleSubmit}
    >
      <input
        className="w-full p-2 text-[#0e0e0e]/95 rounded-[5px] border-2 border-[#6B72FE]/60 col-span-2 lg:col-span-1 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
        maxLength={100}
        type="text"
        name="firstName"
        placeholder={locale === "en" ? "Firstname" : "სახელი"}
        autoCapitalize="none"
        autoComplete="off"
        spellCheck="false"
        required
        // value={form.firstName}
        // onChange={handleChange}
      />
      <input
        className="w-full p-2 text-[#0e0e0e]/95 rounded-[5px] col-span-2 lg:col-span-1 border-2 border-[#6B72FE]/60 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
        maxLength={100}
        type="text"
        name="lastName"
        placeholder={locale === "en" ? "Lastname" : "გვარი"}
        autoCapitalize="none"
        autoComplete="off"
        spellCheck="false"
        required
        // value={form.lastName}
        // onChange={handleChange}
      />
      <input
        className="w-full p-2 text-[#0e0e0e]/95 rounded-[5px] col-span-2 border-2 border-[#6B72FE]/60 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
        maxLength={100}
        type="text"
        name="mobile"
        placeholder={locale === "en" ? "Mobile" : "მობილური"}
        autoCapitalize="none"
        autoComplete="off"
        spellCheck="false"
        required
        // value={form.mobile}
        // onChange={handleChange}
      />
      <input
        className="w-full p-2 text-[#0e0e0e]/95 rounded-[5px] col-span-2 border-2 border-[#6B72FE]/60 focus:border-[#6B72FE] focus:outline-[#6B72FE]"
        maxLength={100}
        type="email"
        name="email"
        placeholder={locale === "en" ? "Email" : "იმეილი"}
        autoCapitalize="none"
        autoComplete="off"
        spellCheck="false"
        required
        // value={form.email}
        // onChange={handleChange}
      />
      <button className=" w-full col-span-2 border-0 bg-[#6B72FE] py-2 mx-auto text-[#fdf2e9] lg:text-[20px] rounded-[5px] hover:bg-[#333B61] transition-all transform duration-300 ease-linear">
        {locale === "en" ? "Submit" : "დადასტურება"}
      </button>
    </form>
  );
}
