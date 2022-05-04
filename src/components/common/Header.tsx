import clsx from "clsx";

export function Header() {
  return (
    <header className="py-6 px-4 shadow-md">
      <div className={clsx("container mx-auto", "flex justify-between")}>
        <h1 className="text-black">Where in the world?</h1>
        <button>toggle</button>
      </div>
    </header>
  );
}
