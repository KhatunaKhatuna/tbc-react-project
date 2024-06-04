import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user) {
      const { name, email, sub, picture } = session.user;

      const user = await sql`SELECT * FROM users WHERE sub = ${sub}`;

      if (!user.rows.length)
        await sql`INSERT INTO users (name, email, sub, image_url) VALUES (${name}, ${email}, ${sub}, ${picture});`;
    }
  } catch (error) {
    return redirect("/api/auth/logout");
  }

  return redirect("/");
}

// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const { name, email, age } = await request.json();

//   try {
//     if (!name || !email || !age)
//       throw new Error("name, email and age are required");
//     await sql`INSERT INTO users (name, email, age) VALUES (${name}, ${email}, ${age});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const users = await sql`SELECT * FROM users;`;
//   return NextResponse.json({ users }, { status: 200 });
// }
