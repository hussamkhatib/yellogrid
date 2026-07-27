import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Influencer marketing for creator gear and tools brands. We
              connect you with the desk-setup and productivity creators whose
              audiences actually buy what they demo.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@yellogrid.com"
                  className="transition-colors hover:text-ink"
                >
                  hello@yellogrid.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-divider pt-6 text-sm text-muted">
          © {new Date().getFullYear()} YelloGrid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
