import React, { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  isPrimary?: boolean;
  isSecondary?: boolean;
  className?: string;
}

const Button = ({
  onClick,
  children,
  isPrimary = false,
  isSecondary = false,
  className = "",
  ...props
}: ButtonProps) => {
  const buttonClass = clsx(
    "px-10 py-3 shrinking-0",
    {
      "bg-primary text-secondary px-12 py-4 rounded-xl font-bold": isPrimary,
      "border-2 border-secondary bg-white text-secondary rounded-xl font-bold":
        isSecondary,
    },
    className
  );

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
