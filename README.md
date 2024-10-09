# Write Clean Code Like A Senior Dev: SOLID Principles In React.js

YouTube [video](https://www.youtube.com/watch?v=gi-97EI7Sus)

## Single responsability

### Container / Presentien

**Container**: state full component for data fetching

```tsx
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
```

**Presentier**: state less component for rendering data passed via props

```tsx
"use clent";

import { UserProfileProps } from "./UserProfileProps";

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <h2>{user.username}</h2>
    </div>
  );
}


```

### Cutom hooks

Isolate application logic in dedicated custom hook

```tsx
import { useState, useEffect } from "react";

type FetchDataProps<T> = {
  uri: string;
  initilaData: T | null;
};

export function useFetchData<T>({ uri, initilaData }: FetchDataProps<T>) {
  const [data, setData] = useState<T | null>(initilaData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    try {
      setLoading(true);
      const res = await fetch(uri);
      const data: T = await res.json();
      setData(data);
      setError("");
    } catch (ex: unknown) {
      const error = ex instanceof Error ? ex.message : "Error fetching data";
      setData(initilaData);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [uri]);

  return { data, error, loading, refetch };
}
```