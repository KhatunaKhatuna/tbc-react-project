import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../costants";
import LoginForm from "../../../components/LoginForm";
import LoginErrorMessage from "../../../components/LoginErrorMessage";
export const dynamic = "force-dynamic";
import DarkMode from "../../../components/DarkMode";
import LangSwitcher from "../../../components/LangSwitcher";
// import { redirect } from "next/navigation";
// import { login } from "../../actions";

export default async function LoginPage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  let message: string | null = null;
  if (cookie?.value) {
    const cookieObj = JSON.parse(cookie.value);
    if (cookieObj?.message) {
      message = cookieObj?.message;
    }
  }
  // const handleLogin = async (username, password) => {
  //   "use server";
  //   await login(username, password);
  // };
  return (
    <div className="relative h-[100vh] ">
      <div className="absolute top-5 right-10 flex gap-5">
        <LangSwitcher />
        <DarkMode />
      </div>
      <LoginForm />
      {message ? <LoginErrorMessage /> : ""}
    </div>
  );
}
