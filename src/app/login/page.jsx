import LoginForm from "@/components/LoginForm";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";
import { redirect } from "next/navigation";
import { login } from "../actions";
import LoginErrorMessage from "@/components/LoginErrorMessage";

export default async function LoginPage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  let message = null;
  if (cookie?.value) {
    const cookieObj = JSON.parse(cookie.value);

    if (cookieObj?.token) {
      redirect("/");
    }
    if (cookieObj?.message) {
      message = cookieObj?.message;
    }
  }
  const handleLogin = async (username, password) => {
    "use server";
    await login(username, password);
  };
  return (
    <div className="h-[100vh] ">
      <LoginForm handleLogin={handleLogin} />
      {message ? <LoginErrorMessage /> : ""}
    </div>
  );
}
