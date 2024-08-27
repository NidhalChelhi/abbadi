import React from "react";

export default function CustomButton({
  children,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  props?: any;
}) {
  return (
    <div
      className={`py-4 px-8 rounded-full bg-secondary text-lg font-medium text-white hover:bg-secondary/80 app-transition ${className}`}
    >
      <button onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
}
