"use clent";

import { UserProfileProps } from "./UserProfileProps";

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <h2>{user.username}</h2>
    </div>
  );
}
