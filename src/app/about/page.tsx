import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero, InfoBlock } from "@/components/InfoPage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="About"
        title="Connecting West Africa, one trade at a time."
        description="SA-Errandlogistics is a marketplace that helps buyers and sellers in Nigeria, Ghana, and Benin discover each other, communicate directly, and arrange delivery — without us getting in the middle of your deal."
      />

      <section className="container-custom max-w-3xl pb-20">
        <InfoBlock title="What we do">
          <p>
            We provide the platform: product listings, seller profiles, messaging,
            and delivery options. Buyers and sellers negotiate and complete their
            transactions directly with each other.
          </p>
          <p>
            SA-Errandlogistics does not process payments between buyers and sellers.
            Our role is to make discovery, communication, and logistics simpler
            across borders.
          </p>
        </InfoBlock>

        <InfoBlock title="Our mission">
          <p>
            Cross-border trade in West Africa should feel as natural as buying
            from a neighbour. We built SA-Errandlogistics to remove the friction
            of finding products, reaching sellers in other countries, and
            coordinating delivery.
          </p>
        </InfoBlock>

        <InfoBlock title="Where we operate">
          <p>🇳🇬 Nigeria — Lagos, Abuja, and nationwide</p>
          <p>🇬🇭 Ghana — Accra, Kumasi, and nationwide</p>
          <p>🇧🇯 Benin Republic — Cotonou, Porto-Novo, and nationwide</p>
        </InfoBlock>

        <div className="grid md:grid-cols-3 gap-6 pt-10">
          {[
            { title: "Discovery", desc: "Browse and search products across three countries." },
            { title: "Messaging", desc: "Chat with sellers before you commit to anything." },
            { title: "Logistics", desc: "Choose seller delivery or SA-Errandlogistics shipping." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "#F7F7F5", border: "1px solid #E8E8E8" }}
            >
              <h3 className="font-semibold mb-2" style={{ color: "#11141C" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
