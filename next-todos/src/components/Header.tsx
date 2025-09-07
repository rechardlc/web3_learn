import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <nav className="flex h-[60px] w-full items-center justify-between p-4">
      <h1>嗒嗒清单</h1>
      <div className="flex items-center gap-4">
        <UserButton />
        <ThemeToggle />
      </div>
    </nav>
  );
}