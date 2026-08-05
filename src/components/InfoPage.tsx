import Link from "next/link";

interface InfoPageHeroProps {
  label: string;
  title: string;
  description: string;
  lastUpdated?: string;
}

export function InfoPageHero({ label, title, description, lastUpdated }: InfoPageHeroProps) {
  return (
    <section className="section-padding-sm" style={{ backgroundColor: "#F7F7F5" }}>
      <div className="container-custom max-w-3xl">
        <p
          className="text-xs uppercase tracking-widest mb-4 font-semibold"
          style={{ color: "#0047AB" }}
        >
          {label}
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#11141C", letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          {title}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "#666" }}>
          {description}
        </p>
        {lastUpdated && (
          <p className="text-xs mt-5" style={{ color: "#999" }}>
            Last updated: {lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
}

interface InfoBlockProps {
  title: string;
  children: React.ReactNode;
}

export function InfoBlock({ title, children }: InfoBlockProps) {
  return (
    <div className="py-10" style={{ borderBottom: "1px solid #E8E8E8" }}>
      <h2 className="text-xl font-semibold mb-4" style={{ color: "#11141C" }}>
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#666" }}>
        {children}
      </div>
    </div>
  );
}

export function InfoLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold hover:opacity-70" style={{ color: "#11141C" }}>
      {children}
    </Link>
  );
}

export function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
