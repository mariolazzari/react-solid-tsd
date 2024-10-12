"use client";

import { User } from "@/types/User";
import { UserProfile } from "../UserProfile";
import { useFetchData } from "@/hooks/useFetchData";
import { Button } from "../Button";

export function Users() {
  const {
    data = [],
    loading,
    error,
    refetch,
  } = useFetchData<User[]>({
    uri: "https://jsonplaceholder.typicode.com/users",
    initilaData: [],
    errorMessage: "Error fetching users",
  });

  if (loading) {
    return <h2 className="text-lg">Loading users...</h2>;
  }

  if (error) {
    return <h3 className="text-red-700 text-lg">{error}</h3>;
  }

  return (
    <>
      <h1 className="font-bold text-xl">Users: {data?.length ?? 0}</h1>

      <Button
        className="p-2 rounded-lg font-semibold bg-sky-700 text-white"
        onClick={refetch}
      >
        Get users
      </Button>

      <div>
        {data?.map(user => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
