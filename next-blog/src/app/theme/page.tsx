"use client";
import useTheme from "@/hooks/useTheme";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div>
      <h1>Home {theme}</h1>
    </div>
  );
}
