import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10">
      <Link href="/" className="flex items-center justify-between">
        <div className="h-6 text-2xl font-semibold">{siteMetadata.title}</div>
      </Link>
      <div className="flex items-center space-x-4 leading-5">
        <Link
          href="/posts"
          className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
        >
          博客
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
