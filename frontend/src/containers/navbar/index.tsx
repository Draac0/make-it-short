import { type ReactElement } from "react";
import { ThemeToggle } from "@/components/themeToggle";
import variables from "@/lib/variables";

const Navbar = (): ReactElement => {
  return (
    <header className="flex justify-between p-10 absolute w-full">
      <p className="text-2xl font-semibold">{variables.en.make_it_short}</p>
      <ThemeToggle />
    </header>
  );
};

export default Navbar;
