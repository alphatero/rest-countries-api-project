import { Icon } from "..";

const toggle = () => {
  const element = document.documentElement;

  element.classList.toggle("dark");
};

export function ThemeToggle() {
  return (
    <button className="flex items-center space-x-2 p-2" onClick={toggle}>
      <span className="w-4">
        <Icon.Moon />
      </span>

      <span className="text-xs md:text-base">Dark Mode</span>
    </button>
  );
}
