"use clent";

import { UserProfileActions } from "./UserProfileActions";
import { UserProfileProps } from "./UserProfileProps";

export function UserProfile({ user }: UserProfileProps) {
  const onUserClick = () => {
    window.alert(user.name);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 shadow-lg w-48 hover:shadow-xl">
      <h1 className="font-bold text-sky-700 text-lg">{user.username}</h1>
      <h2 className="text-sm truncate">{user.name}</h2>
      <UserProfileActions onClick={onUserClick} />
    </div>
  );
}
