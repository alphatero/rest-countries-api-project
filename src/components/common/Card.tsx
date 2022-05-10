import clsx from "clsx";
import { cloneElement, isValidElement, ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  //check children is a react dom
  if (!isValidElement(children)) return <>{children}</>;

  //clone to childern
  return cloneElement(children, {
    ...children.props,
    className: clsx(
      "shadow-md rounded overflow-hidden bg-white dark:bg-blue-dark",
      className,
      children.props.className
    ),
  });
}
