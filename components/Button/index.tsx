import { HTMLAttributes } from "react";

export function Button({
  children,
  onClick, // custom behavoiur without altering component
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}
