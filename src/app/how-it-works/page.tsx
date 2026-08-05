import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero, InfoBlock } from "@/components/InfoPage";
import { Search, MessageCircle, Truck, Handshake, Upload, Package, BarChart2 } from "lucide-react";

const BUYER_STEPS = [
  { icon: Search, title: "Browse", desc: "Search products across Nigeria, Ghana, and Benin. Filter by category, location, and price." },
  { icon: MessageCircle, title: "Message", desc: "Chat with the seller. Ask questions, negotiate price, and confirm delivery details." },
  { icon: Truck, title: "Choose delivery", desc: "Pick seller delivery or SA-Errandlogistics shipping. Agree on timeline and cost." },
  { icon: Handshake, title: "Agree directly", desc: "Arrange payment with the seller — bank transfer, mobile money, or cash on delivery. We don't process payments." },
];

const SELLER_STEPS = [
  { icon: Upload, title: "List", desc: "Create your seller profile and upload products with photos, price, and delivery preference." },
  { icon: MessageCircle, title: "Respond", desc: "Reply to buyer messages, answer questions, and negotiate terms directly." },
  { icon: Package, title: "Ship", desc: "Deliver yourself or hand off to SA-Errandlogistics for cross-border orders." },
  { icon: BarChart2, title: "Grow", desc: "Build your reputation with reviews and reach buyers across three countries." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="How It Works"
        title="Simple for buyers. Powerful for sellers."
        description="SA-Errandlogistics connects you with the right people. Payment stays between buyer and seller — we handle discovery, messaging, and delivery."
      />

      <section className="container-custom max-w-4xl pb-20">
        <h2 className="text-2xl font-bold mb-8" style={{ color: "#11141C" }}>For buyers</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {BUYER_STEPS.map((step, i) => (
            <div key={i} className="p-6 rounded-2xl" style={{ border: "1.5px solid #E8E8E8" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0047AB" }}>
                  <step.icon className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                </div>
                <span className="text-xs font-bold" style={{ color: "#999" }}>0{i + 1}</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#11141C" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-8" style={{ color: "#11141C" }}>For sellers</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {SELLER_STEPS.map((step, i) => (
            <div key={i} className="p-6 rounded-2xl" style={{ border: "1.5px solid #E8E8E8" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#11141C" }}>
                  <step.icon className="w-4 h-4" style={{ color: "#0047AB" }} />
                </div>
                <span className="text-xs font-bold" style={{ color: "#999" }}>0{i + 1}</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#11141C" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <InfoBlock title="What SA-Errandlogistics does — and doesn't do">
          <p><strong style={{ color: "#11141C" }}>We provide:</strong> product listings, seller profiles, messaging, delivery coordination, and cross-border logistics.</p>
          <p><strong style={{ color: "#11141C" }}>We don't provide:</strong> payment processing, escrow, or dispute resolution for financial transactions between buyers and sellers.</p>
        </InfoBlock>
      </section>

      <Footer />
    </div>
  );
}
