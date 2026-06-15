import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero, InfoBlock, InfoLink } from "@/components/InfoPage";

const LAST_UPDATED = "June 15, 2026";

const COOKIE_TABLE = [
  {
    name: "sa_session",
    type: "Essential",
    purpose: "Keeps you logged in during your visit",
    duration: "Session",
  },
  {
    name: "sa_country",
    type: "Essential",
    purpose: "Remembers your country selection (NG, GH, BJ) for currency display",
    duration: "1 year",
  },
  {
    name: "sa_consent",
    type: "Essential",
    purpose: "Stores your cookie consent preferences",
    duration: "1 year",
  },
  {
    name: "sa_cart",
    type: "Functional",
    purpose: "Saves items in your cart between visits",
    duration: "30 days",
  },
  {
    name: "sa_recent",
    type: "Functional",
    purpose: "Remembers recently viewed products",
    duration: "7 days",
  },
  {
    name: "sa_analytics",
    type: "Analytics",
    purpose: "Helps us understand how the platform is used (pages visited, search terms)",
    duration: "1 year",
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="Legal"
        title="Cookie Policy"
        description="This policy explains how SA-Errandlogistics uses cookies and similar technologies when you visit our marketplace."
        lastUpdated={LAST_UPDATED}
      />

      <section className="container-custom max-w-3xl pb-20">
        <InfoBlock title="1. What are cookies?">
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            the Platform remember your preferences, keep you logged in, and understand how the site
            is used. We also use similar technologies such as local storage for the same purposes.
          </p>
        </InfoBlock>

        <InfoBlock title="2. How we use cookies">
          <p>SA-Errandlogistics uses cookies in four categories:</p>
          <div className="space-y-4 mt-2">
            {[
              {
                title: "Essential",
                desc: "Required for the Platform to function. Cannot be disabled. Includes login sessions and country preference.",
              },
              {
                title: "Functional",
                desc: "Enhance your experience — saved cart items, recently viewed products, language preferences.",
              },
              {
                title: "Analytics",
                desc: "Help us understand usage patterns to improve the Platform. Data is aggregated and anonymised where possible.",
              },
              {
                title: "Marketing",
                desc: "We currently do not use marketing or advertising cookies. If this changes, we will update this policy and request consent.",
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="p-4 rounded-xl"
                style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8" }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: "#11141C" }}>{cat.title}</p>
                <p className="text-sm" style={{ color: "#666" }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </InfoBlock>

        <InfoBlock title="3. Cookies we use">
          <div className="overflow-x-auto -mx-1">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #E8E8E8" }}>
                  {["Cookie", "Type", "Purpose", "Duration"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 pr-4 font-semibold"
                      style={{ color: "#11141C" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COOKIE_TABLE.map((row) => (
                  <tr key={row.name} style={{ borderBottom: "1px solid #F0F0F0" }}>
                    <td className="py-3 pr-4 font-mono text-xs" style={{ color: "#11141C" }}>{row.name}</td>
                    <td className="py-3 pr-4">
                      <span
                        className="px-2 py-0.5 rounded text-xs font-semibold"
                        style={{
                          backgroundColor: row.type === "Essential" ? "#3DFF7F" : "#F7F7F5",
                          color: "#11141C",
                        }}
                      >
                        {row.type}
                      </span>
                    </td>
                    <td className="py-3 pr-4" style={{ color: "#666" }}>{row.purpose}</td>
                    <td className="py-3" style={{ color: "#666" }}>{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoBlock>

        <InfoBlock title="4. Third-party cookies">
          <p>
            We may use trusted third-party services (e.g. analytics providers, CDN) that set their
            own cookies. These are subject to the respective third party&apos;s privacy policy.
            We do not allow third-party advertising cookies on the Platform.
          </p>
        </InfoBlock>

        <InfoBlock title="5. Managing cookies">
          <p>You can control cookies in several ways:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong style={{ color: "#11141C" }}>Browser settings</strong> — most browsers let you
              block or delete cookies. Note that blocking essential cookies may prevent the Platform
              from working correctly.
            </li>
            <li>
              <strong style={{ color: "#11141C" }}>Platform settings</strong> — when available in
              your account, you can manage analytics cookie preferences.
            </li>
            <li>
              <strong style={{ color: "#11141C" }}>Opt-out links</strong> — for analytics providers
              we use, visit their opt-out pages directly.
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock title="6. Do Not Track">
          <p>
            Some browsers send &quot;Do Not Track&quot; signals. There is no industry standard for
            responding to these signals. We currently do not alter our practices based on DNT signals,
            but we minimise non-essential tracking by default.
          </p>
        </InfoBlock>

        <InfoBlock title="7. Changes">
          <p>
            We may update this Cookie Policy when we add or remove cookies. The &quot;Last updated&quot;
            date at the top reflects the most recent revision.
          </p>
        </InfoBlock>

        <InfoBlock title="8. Contact">
          <p>
            Questions about cookies:{" "}
            <a href="mailto:privacy@sa-errandlogistics.com" className="font-semibold" style={{ color: "#11141C" }}>
              privacy@sa-errandlogistics.com
            </a>
          </p>
        </InfoBlock>

        <div
          className="mt-8 p-5 rounded-2xl text-sm"
          style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8", color: "#666" }}
        >
          Related: <InfoLink href="/privacy">Privacy Policy</InfoLink> ·{" "}
          <InfoLink href="/terms">Terms of Service</InfoLink> ·{" "}
          <InfoLink href="/contact">Contact us</InfoLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}
