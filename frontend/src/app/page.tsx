import { type ReactElement } from "react";
import variables from "@/lib/variables";

export default function Home(): ReactElement {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <h1 className="font-semibold text-6xl mr-6">
        {variables.en.coming_soon}
      </h1>
    </main>
  );
}
