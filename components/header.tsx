import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          YesItaly
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="/sign-in" className="text-sm hover:underline">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-sm hover:underline">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
