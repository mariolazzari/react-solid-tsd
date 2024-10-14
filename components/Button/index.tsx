import { HTMLAttributes } from "react";

export function Button({
  children,
  onClick, // custom behavoiur without altering component
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="p-2 rounded-lg font-semibold bg-sky-700 text-white"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
