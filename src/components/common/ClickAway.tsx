import {
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { v4 as uuid } from "uuid";

// eslint-disable-next-line @typescript-eslint/ban-types
const mapping = new Map<string, [HTMLElement, Function | undefined]>();

window.addEventListener("click", (event: MouseEvent) => {
  mapping.forEach(([element, func]) => {
    if (element.contains(event.target as HTMLElement)) return;

    func?.();
  });
});

type ClickAwayProps = {
  children?: ReactNode;
  onClickAway?: () => void;
};

/**
 * when element be clicked
 */
export function ClickAway({ children, onClickAway }: ClickAwayProps) {
  if (!isValidElement(children))
    throw new Error("this is not a react element.");

  //to get active element
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || !onClickAway) return;

    const id = uuid();

    mapping.set(id, [ref.current, onClickAway]);

    return () => void mapping.delete(id);
  }, [onClickAway]);

  return cloneElement(children, {
    ...children.props,
    ref,
  });
}
