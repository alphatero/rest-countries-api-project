import clsx from "clsx";
import { ThemeToggle } from "./elements";

export function Header() {
  return (
    <header className="py-6 px-4 shadow-md">
      <div
        className={clsx(
          "container mx-auto",
          "flex justify-between items-center"
        )}
      >
        <h1 className="font-bold">Where in the world?</h1>

        <ThemeToggle />
      </div>
    </header>
  );
}
