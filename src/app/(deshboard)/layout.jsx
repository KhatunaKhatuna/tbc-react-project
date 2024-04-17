import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  if (!cookie?.value) {
    redirect("/login");
  } else {
    const cookieObj = JSON.parse(cookie.value);
    if (cookieObj?.message) {
      redirect("/login");
    }
  }

  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
