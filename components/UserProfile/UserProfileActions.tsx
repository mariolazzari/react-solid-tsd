import { Button } from "../Button";
import { UserProfileActionsProps } from "./UserProfileActionsProps";

export function UserProfileActions({ onClick }: UserProfileActionsProps) {
  return <Button onClick={onClick}>Select</Button>;
}
