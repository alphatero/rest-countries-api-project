/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { clamp } from "ramda";
import clsx from "clsx";
import {
  UIEventHandler,
  useCallback,
  useState,
  UIEvent,
  ReactNode,
} from "react";

const range = (length: number) => Array.from({ length }, (_, index) => index);

function useScroll<T extends HTMLElement>(): [number, UIEventHandler<T>] {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback(
    (event: UIEvent<T>) => {
      const { scrollTop } = event.target as T;

      requestAnimationFrame(() => setScrollTop(scrollTop));
    },
    [setScrollTop]
  );

  return [scrollTop, onScroll];
}

type VirtualListProps<T> = {
  rowHeight: number;
  gap: number;
  visibleCount: number;
  list: T[];
  children?: (item: T) => ReactNode;
  classes?: Partial<{
    wrapper?: string;
    list: string;
  }>;
};

export function VirtualList<T>({
  rowHeight,
  gap,
  visibleCount,
  list,
  classes,
  children,
}: VirtualListProps<T>) {
  const [scrollTop, onScroll] = useScroll();

  //set row hight
  const _rowHeight = rowHeight + gap;

  //set viewport hight
  const viewportHeight = _rowHeight * visibleCount - gap;
  const totalHeight = _rowHeight * list.length - gap;

  const startIndex = clamp(
    0,
    Math.max(0, list.length - visibleCount),
    Math.floor(scrollTop / _rowHeight)
  );

  return (
    <div
      className={clsx("overflow-auto", classes?.wrapper)}
      onScroll={onScroll}
      style={{ height: viewportHeight + "px" }}
    >
      <ul
        style={{
          height: totalHeight + "px",
          willChange: "transform",
          transform: `translateY(${startIndex * _rowHeight}px)`,
        }}
        className={classes?.list}
      >
        {children &&
          range(visibleCount + 1)
            .filter((index) => list[startIndex + index])
            .map((index) => (
              <li
                key={startIndex + index}
                style={{ height: rowHeight + "px", marginBottom: gap + "px" }}
              >
                {children?.(list[startIndex + index])}
              </li>
            ))}
      </ul>
    </div>
  );
}
