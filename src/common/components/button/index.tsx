import { ClassAttributes, ButtonHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

function Button(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
