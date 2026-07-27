import BookACallButton from "@/components/BookACallButton";

export default function Hero() {
  return (
    <section
      className="border-b border-divider bg-background"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(255,199,44,0.08), transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
            Connecting brands with
            with creators who convert.

          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            We help creator gear influencers land brand deals through
            strategic partnerships.
          </p>
          <div className="mt-8">
            <BookACallButton className="inline-flex items-center justify-center rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-none transition-opacity hover:opacity-90 active:opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
