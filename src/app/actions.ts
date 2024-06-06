"use server";
import { revalidatePath } from "next/cache";
import { createUser, deleteUser, updateUser, editProfile } from "./api";
import { ProfileData } from "../../types";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "@/costants";
// import { redirect } from "next/navigation";

// export async function login(username, password) {
//   "use server";
//   try {
//     const response = await fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     });
//     const user = await response.json();
//     const cookieStore = cookies();
//     cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// export async function logOut() {
//   "use server";
//   const cookieStore = cookies();
//   cookieStore.delete(AUTH_COOKIE_KEY);
//   redirect("/login");
// }

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  createUser(name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function updateUserAction(formData: FormData) {
  const { id, name, email, age } = Object.fromEntries(formData);
  updateUser(id as string, name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function editProfileInfo(formData: ProfileData) {
  const { name, email, userSub } = formData;
  revalidatePath("/profile");
  editProfile(name, email, userSub);
}
