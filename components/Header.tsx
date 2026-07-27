import Link from "next/link";
import Logo from "@/components/Logo";
import BookACallButton from "@/components/BookACallButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>

        <BookACallButton className="inline-flex items-center rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white shadow-none transition-opacity hover:opacity-90 active:opacity-80" />
      </div>
    </header>
  );
}
