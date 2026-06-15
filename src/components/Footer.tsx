import Link from "next/link";
import Image from "next/image";

const LINKS = {
  Marketplace: [
    { label: "Shop", href: "/shop" },
    { label: "Sell on SA", href: "/sell" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Shipping Info", href: "/shipping" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#11141C" }}>
      <div className="container-custom py-16">
        <div
          className="grid md:grid-cols-4 gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/assets/logo.png"
                  alt="SA-Errandlogistics"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span style={{ color: "#FFFFFF", fontWeight: 600 }} className="text-sm">
                SA-Errandlogistics
              </span>
            </Link>
            <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.7 }}>
              Connect buyers and sellers across Nigeria, Ghana & Benin Republic.
            </p>
            <div className="flex gap-2 mt-5">
              {["🇳🇬", "🇬🇭", "🇧🇯"].map((flag) => (
                <span key={flag} className="text-xl">{flag}</span>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 style={{ color: "#FFFFFF", fontWeight: 600 }} className="text-sm mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      style={{ color: "#666666", fontSize: "0.85rem" }}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p style={{ color: "#444", fontSize: "0.8rem" }}>
            © 2026 SA-Errandlogistics Marketplace. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#444", fontSize: "0.8rem" }}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
