import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero, InfoBlock, InfoList, InfoLink } from "@/components/InfoPage";

const LAST_UPDATED = "June 15, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="Legal"
        title="Privacy Policy"
        description="This policy explains how SA-Errandlogistics Marketplace collects, uses, stores, and protects your personal data when you use our platform in Nigeria, Ghana, and Benin Republic."
        lastUpdated={LAST_UPDATED}
      />

      <section className="container-custom max-w-3xl pb-20">
        <InfoBlock title="1. Who we are">
          <p>
            SA-Errandlogistics Marketplace (&quot;SA-Errandlogistics&quot;, &quot;we&quot;, &quot;us&quot;) operates an
            online marketplace connecting buyers and sellers across West Africa. Our platform
            facilitates product discovery, messaging, and delivery coordination. We do not process
            payments between buyers and sellers.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:privacy@sa-errandlogistics.com" className="font-semibold" style={{ color: "#11141C" }}>
              privacy@sa-errandlogistics.com
            </a>
          </p>
        </InfoBlock>

        <InfoBlock title="2. Information we collect">
          <p><strong style={{ color: "#11141C" }}>Account information</strong></p>
          <InfoList
            items={[
              "Full name, email address, phone number",
              "Country of residence (Nigeria, Ghana, or Benin)",
              "Profile photo and seller business details (if applicable)",
              "Password (stored in encrypted form)",
            ]}
          />
          <p><strong style={{ color: "#11141C" }}>Platform activity</strong></p>
          <InfoList
            items={[
              "Product listings, photos, and descriptions you publish",
              "Messages exchanged with other users on the platform",
              "Delivery preferences and addresses you provide",
              "Reviews and ratings you submit",
            ]}
          />
          <p><strong style={{ color: "#11141C" }}>Technical data</strong></p>
          <InfoList
            items={[
              "IP address, browser type, and device information",
              "Pages visited, search queries, and interaction logs",
              "Cookies and similar technologies (see our Cookie Policy)",
            ]}
          />
          <p>
            <strong style={{ color: "#11141C" }}>What we do not collect:</strong> We do not collect,
            process, or store payment card details, bank account numbers, or financial transaction
            data between buyers and sellers. Payments are arranged directly between users.
          </p>
        </InfoBlock>

        <InfoBlock title="3. How we use your information">
          <InfoList
            items={[
              "Create and manage your account",
              "Display product listings and enable messaging between users",
              "Show prices in your local currency based on country selection",
              "Coordinate delivery through SA-Errandlogistics logistics where applicable",
              "Send service notifications (order updates, messages, account alerts)",
              "Improve platform performance, security, and user experience",
              "Comply with legal obligations in Nigeria, Ghana, and Benin",
            ]}
          />
        </InfoBlock>

        <InfoBlock title="4. Legal basis for processing">
          <p>We process your data based on:</p>
          <InfoList
            items={[
              "Contract — to provide the marketplace services you signed up for",
              "Legitimate interest — to improve security, prevent fraud, and analyse usage",
              "Consent — for optional marketing communications and non-essential cookies",
              "Legal obligation — when required by applicable law or authorities",
            ]}
          />
        </InfoBlock>

        <InfoBlock title="5. Sharing your information">
          <p>We may share data with:</p>
          <InfoList
            items={[
              "Other users — your public profile, listings, and messages you send",
              "Logistics partners — delivery addresses and contact details for SA-Errandlogistics shipping",
              "Service providers — hosting, analytics, and customer support tools under strict contracts",
              "Authorities — when legally required or to protect rights and safety",
            ]}
          />
          <p>We do not sell your personal data to third parties.</p>
        </InfoBlock>

        <InfoBlock title="6. Data retention">
          <p>
            We retain your account data while your account is active. After account deletion, we
            remove or anonymise personal data within 90 days, except where retention is required
            by law (e.g. fraud prevention, legal disputes).
          </p>
          <p>Messages and transaction-related communications may be retained for up to 2 years for dispute support.</p>
        </InfoBlock>

        <InfoBlock title="7. Your rights">
          <p>Depending on your country, you may have the right to:</p>
          <InfoList
            items={[
              "Access the personal data we hold about you",
              "Correct inaccurate or incomplete data",
              "Request deletion of your account and associated data",
              "Object to or restrict certain processing activities",
              "Withdraw consent for optional processing (e.g. marketing)",
              "Lodge a complaint with your local data protection authority",
            ]}
          />
          <p>
            To exercise these rights, email{" "}
            <a href="mailto:privacy@sa-errandlogistics.com" className="font-semibold" style={{ color: "#11141C" }}>
              privacy@sa-errandlogistics.com
            </a>
            . We respond within 30 days.
          </p>
        </InfoBlock>

        <InfoBlock title="8. Security">
          <p>
            We use industry-standard measures including encryption in transit (HTTPS/TLS),
            encrypted password storage, access controls, and regular security reviews. No system
            is 100% secure — please use a strong password and do not share account credentials.
          </p>
        </InfoBlock>

        <InfoBlock title="9. International transfers">
          <p>
            Your data may be processed on servers located outside your country of residence.
            When this occurs, we ensure appropriate safeguards are in place consistent with
            applicable data protection laws in Nigeria, Ghana, and Benin.
          </p>
        </InfoBlock>

        <InfoBlock title="10. Children">
          <p>
            SA-Errandlogistics is not intended for users under 18. We do not knowingly collect
            data from minors. Contact us if you believe a minor has created an account.
          </p>
        </InfoBlock>

        <InfoBlock title="11. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be
            communicated via email or a notice on the platform. Continued use after changes
            constitutes acceptance.
          </p>
        </InfoBlock>

        <div
          className="mt-8 p-5 rounded-2xl text-sm"
          style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8", color: "#666" }}
        >
          Related: <InfoLink href="/cookies">Cookie Policy</InfoLink> ·{" "}
          <InfoLink href="/terms">Terms of Service</InfoLink> ·{" "}
          <InfoLink href="/contact">Contact us</InfoLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}
