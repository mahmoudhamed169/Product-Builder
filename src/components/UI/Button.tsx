import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
export default function Button({
  children,
  className,
  width = "w-full",
  ...rest
}: IProps) {
  return (
    <button
      className={`${className} ${width} p-2 w-full rounded-md text-white  `}
      {...rest}
    >
      {children}
    </button>
  );
}
