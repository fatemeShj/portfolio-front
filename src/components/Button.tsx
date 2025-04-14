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
    "px-12 py-4 font-bold shrinking-0 rounded-full",
    {
      "bg-secondary text-customGray": isPrimary,
      "bg-customGray text-tertiary": isSecondary,
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
