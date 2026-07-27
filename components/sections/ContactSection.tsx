import ContactForm from "@/components/ContactForm";

export default function ContactSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            {showHeading && (
              <>
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                  Let&rsquo;s talk about your brand
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Tell us about your product and goals, and we&rsquo;ll
                  follow up to schedule a call. No obligation, no generic
                  pitch deck.
                </p>
              </>
            )}
            <p className="mt-6 text-sm text-muted">
              Prefer email?{" "}
              <a
                href="mailto:hussam@yellogrid.com"
                className="font-medium text-ink underline underline-offset-4"
              >
                hussam@yellogrid.com
              </a>
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
