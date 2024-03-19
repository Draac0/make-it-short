import { type ReactElement } from "react";
import { ThemeToggle } from "@/components/themeToggle";
import variables from "@/lib/variables";

const Navbar = (): ReactElement => {
  return (
    <header className="flex justify-between items-center py-6 px-10 absolute w-full border-b border-gray-200 dark:border-gray-800">
      <p className="text-2xl font-semibold">{variables.en.make_it_short}</p>
      <ThemeToggle />
    </header>
  );
};

export default Navbar;
