import { getSession } from "@auth0/nextjs-auth0";
// import { BASE_URL } from "../constants";

export async function getUsers() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + "/api/get-users"
  );
  const { users } = await response.json();
  return users.rows;
}

export async function createUser(name: string, email: string, age: string) {
  return await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  "use server";
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: string
) {
  return await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/edit-user", {
    method: "PUT",
    body: JSON.stringify({ id, name, email, age }),
  });
}

export async function getUserInfo() {
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;
  const userSubId = await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + `/api/get-users/${id}`,
    {
      cache: "no-store",
    }
  );

  const userInfo = await userSubId.json();

  const userDetail = userInfo.user.rows[0];
  return userDetail;
}

export async function getUserImage() {
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;
  const userImage = await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + `/api/get-user-image/${id}`,
    {
      cache: "no-store",
    }
  );
  const userImageInfo = await userImage.json();

  const imageUrl = userImageInfo.userImage.rows[0].image_url;
  return imageUrl;
}

export async function editProfile(
  name: string,
  email: string,
  userSub: string
) {
  return await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + "/api/edit-profileInfo",
    {
      method: "POST",
      body: JSON.stringify({ name, email, userSub }),
    }
  );
}
