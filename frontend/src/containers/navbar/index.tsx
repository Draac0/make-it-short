import { type ReactElement } from "react";
import { ThemeToggle } from "@/components/themeToggle";

const Navbar = (): ReactElement => {
  return (
    <header className="flex justify-between p-10 absolute w-full">
      <p className="text-2xl font-semibold">Make it short</p>
      <ThemeToggle />
    </header>
  );
};

export default Navbar;
