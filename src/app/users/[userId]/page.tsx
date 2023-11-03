"use client"
import { User } from "@/types/user";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useFetch } from "usehooks-ts";

export default function UserPage() {
  const { userId } = useParams()
  const { data: user, error } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);

  return (
    <main>
      <Link href="/users">Users</Link>
      <h1>User</h1>
      {user ? (
        <>
          <div>Name: {user.name}</div>
          <div>Id: {user.id}</div>
        </>
      ) : (
        <div>{error ? "Error!" : "Loading..."}</div>
      )}
    </main>
  );
}
