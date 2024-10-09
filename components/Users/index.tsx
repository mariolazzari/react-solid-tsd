"use client";

import { User } from "@/types/User";
import { UserProfile } from "../UserProfile";
import { useFetchData } from "@/hooks/useFetchData";

export function Users() {
  const {
    data = [],
    loading,
    error,
  } = useFetchData<User[]>({
    uri: "https://jsonplaceholder.typicode.com/users",
    initilaData: [],
  });

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="p-8">
      <h1>Users: {data?.length ?? 0}</h1>

      <div>
        {data?.map(user => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
