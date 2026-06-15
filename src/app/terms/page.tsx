import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero, InfoBlock, InfoList, InfoLink } from "@/components/InfoPage";

const LAST_UPDATED = "June 15, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="Legal"
        title="Terms of Service"
        description="These terms govern your access to and use of SA-Errandlogistics Marketplace. By creating an account or using the platform, you agree to these terms."
        lastUpdated={LAST_UPDATED}
      />

      <section className="container-custom max-w-3xl pb-20">
        <InfoBlock title="1. About the platform">
          <p>
            SA-Errandlogistics Marketplace (&quot;the Platform&quot;) is operated by SA-Errandlogistics
            and available in Nigeria, Ghana, and Benin Republic. The Platform enables buyers and
            sellers to discover products, communicate via messaging, and coordinate delivery.
          </p>
          <p>
            <strong style={{ color: "#11141C" }}>Important:</strong> SA-Errandlogistics is not a
            party to transactions between buyers and sellers. We do not process, hold, or guarantee
            payments. All financial arrangements are made directly between users.
          </p>
        </InfoBlock>

        <InfoBlock title="2. Eligibility">
          <InfoList
            items={[
              "You must be at least 18 years old",
              "You must provide accurate registration information",
              "You must comply with laws in your country of residence",
              "One person or business may not maintain multiple accounts without approval",
            ]}
          />
        </InfoBlock>

        <InfoBlock title="3. Account responsibilities">
          <p>You are responsible for:</p>
          <InfoList
            items={[
              "Maintaining the confidentiality of your login credentials",
              "All activity that occurs under your account",
              "Keeping your contact information and profile up to date",
              "Notifying us immediately of any unauthorised access",
            ]}
          />
        </InfoBlock>

        <InfoBlock title="4. For sellers">
          <InfoList
            items={[
              "Listings must accurately describe the product, condition, and price",
              "You must respond to buyer messages in a timely manner",
              "You set your own payment methods and terms — SA-Errandlogistics does not intervene",
              "You are responsible for fulfilling orders according to agreed delivery terms",
              "Prohibited items (counterfeit goods, illegal products, weapons, etc.) are not allowed",
              "SA-Errandlogistics may remove listings that violate these terms without notice",
            ]}
          />
        </InfoBlock>

        <InfoBlock title="5. For buyers">
          <InfoList
            items={[
              "Verify product details and seller reputation before committing to a purchase",
              "Agree on price, payment method, and delivery terms via messaging before paying",
              "Payment is made directly to the seller — not through SA-Errandlogistics",
              "Report suspicious listings or behaviour to our support team",
              "Leave honest reviews after completed transactions",
            ]}
          />
        </InfoBlock>

        <InfoBlock title="6. Messaging and conduct">
          <p>Users must not:</p>
          <InfoList
            items={[
              "Harass, threaten, or discriminate against other users",
              "Share false or misleading information",
              "Attempt to conduct transactions outside the Platform to circumvent fees (where applicable)",
              "Use the Platform for spam, fraud, or illegal activity",
              "Scrape, copy, or reverse-engineer Platform content without permission",
            ]}
          />
          <p>We may suspend or terminate accounts that violate these rules.</p>
        </InfoBlock>

        <InfoBlock title="7. Delivery and logistics">
          <p>
            SA-Errandlogistics may offer cross-border shipping services in Nigeria, Ghana, and
            Benin. Delivery timelines and costs for SA-Errandlogistics shipping are estimates and
            may vary. Seller-managed delivery terms are agreed directly between buyer and seller.
          </p>
          <p>
            See our <InfoLink href="/shipping">Shipping Info</InfoLink> page for delivery options.
          </p>
        </InfoBlock>

        <InfoBlock title="8. Fees">
          <p>
            Creating an account and browsing listings is free. SA-Errandlogistics may charge
            sellers listing fees or logistics fees for SA-Errandlogistics shipping services.
            Applicable fees will be disclosed before you incur them.
          </p>
        </InfoBlock>

        <InfoBlock title="9. Intellectual property">
          <p>
            The SA-Errandlogistics name, logo, and Platform design are our property. Sellers retain
            ownership of their product photos and descriptions but grant us a licence to display
            them on the Platform.
          </p>
        </InfoBlock>

        <InfoBlock title="10. Disclaimers">
          <InfoList
            items={[
              "The Platform is provided \"as is\" without warranties of any kind",
              "We do not guarantee the quality, safety, or legality of items listed by sellers",
              "We are not responsible for disputes between buyers and sellers, including payment disputes",
              "We do not guarantee uninterrupted or error-free access to the Platform",
            ]}
          />
        </InfoBlock>

        <InfoBlock title="11. Limitation of liability">
          <p>
            To the maximum extent permitted by law, SA-Errandlogistics shall not be liable for
            indirect, incidental, or consequential damages arising from your use of the Platform
            or transactions between users. Our total liability shall not exceed the fees paid to
            us in the 12 months preceding the claim.
          </p>
        </InfoBlock>

        <InfoBlock title="12. Termination">
          <p>
            You may delete your account at any time via account settings or by contacting support.
            We may suspend or terminate your account for violations of these terms, illegal activity,
            or extended inactivity. Upon termination, your right to use the Platform ceases immediately.
          </p>
        </InfoBlock>

        <InfoBlock title="13. Governing law">
          <p>
            These terms are governed by the laws of the Federal Republic of Nigeria, without regard
            to conflict of law principles. Disputes shall be subject to the exclusive jurisdiction
            of courts in Lagos, Nigeria, unless mandatory local consumer protection laws in Ghana
            or Benin provide otherwise.
          </p>
        </InfoBlock>

        <InfoBlock title="14. Contact">
          <p>
            Questions about these terms:{" "}
            <a href="mailto:legal@sa-errandlogistics.com" className="font-semibold" style={{ color: "#11141C" }}>
              legal@sa-errandlogistics.com
            </a>
          </p>
        </InfoBlock>

        <div
          className="mt-8 p-5 rounded-2xl text-sm"
          style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8", color: "#666" }}
        >
          Related: <InfoLink href="/privacy">Privacy Policy</InfoLink> ·{" "}
          <InfoLink href="/cookies">Cookie Policy</InfoLink> ·{" "}
          <InfoLink href="/contact">Contact us</InfoLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}
