import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function Input({ ...rest }: IProps) {
  return (
    <input
      type="text"
      name=""
      id=""
      className="border-2 border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md px-3 py-3 text-md"
      {...rest}
    />
  );
}
