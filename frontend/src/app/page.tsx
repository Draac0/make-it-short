import { type ReactElement } from "react";
import { ThemeToggle } from "@/components/themeToggle";

export default function Home(): ReactElement {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <h1 className="font-semibold text-6xl mr-6">Make it Short</h1>
      <ThemeToggle />
    </main>
  );
}
