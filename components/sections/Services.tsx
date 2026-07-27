import { ChartIcon, HandshakeIcon, TargetIcon } from "@/components/icons";

const SERVICES = [
  {
    icon: ChartIcon,
    title: "Brand Growth & Positioning",
    description:
      "We build marketing strategies that pair brands with the right creators to grow visibility and engagement. Every partnership is guided by audience relevance, creative authenticity, and results that last.",
  },
  {
    icon: TargetIcon,
    title: "Campaign Strategy & Management",
    description:
      "We plan and manage influencer campaigns that deliver real engagement and measurable results, backed by strategy, storytelling, and data from kickoff to reporting.",
  },
  {
    icon: HandshakeIcon,
    title: "Influencer Brand Partnerships",
    description:
      "We bring brands and creators together to produce authentic, high-impact content. Every collaboration is designed to resonate with audiences, strengthen credibility, and drive engagement for both sides.",
  },
];

export default function Services() {
  return (
    <section className="border-b border-divider bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            What we do
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            End-to-end influencer marketing for gear and tools brands —
            from finding the right creators to reporting on results.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 sm:p-10"
            >
              <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
                <div className="flex justify-center text-ink sm:justify-start">
                  <service.icon className="h-16 w-16" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
