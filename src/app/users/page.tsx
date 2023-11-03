"use client"
import { User } from "@/types/user";
import Link from "next/link";
import { useFetch } from "usehooks-ts";

export default function UsersPage() {
  const { data: users, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  const userComponent = (user: User) => (
    <li>
      <Link key={user.id} href={`/users/${user.id}`}>
        {user.name}
      </Link>
    </li>
  )

  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Users</h1>
      {users ? (
        <ul>
          {users.map(userComponent)}
        </ul>
      ) : (
        <div>{error ? "Error!" : "Loading..."}</div>
      )}
    </main>
  );
}
