import { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="shadow-md rounded overflow-hidden bg-white dark:bg-blue-dark max-w-[15rem]">
      {children}
    </div>
  );
}
