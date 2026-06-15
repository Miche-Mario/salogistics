import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InfoPageHero, InfoBlock, InfoLink } from "@/components/InfoPage";
import { Truck, Package, MapPin } from "lucide-react";

const OPTIONS = [
  {
    icon: Package,
    title: "Seller Delivery",
    description:
      "The seller handles packaging and delivery to your address. Delivery time and cost are agreed directly with the seller via messaging before you confirm.",
    timeline: "Varies by seller · typically 1–7 days",
  },
  {
    icon: Truck,
    title: "SA-Errandlogistics Shipping",
    description:
      "Our logistics network handles cross-border delivery between Nigeria, Ghana, and Benin. Ideal when buying from a seller in another country.",
    timeline: "2–5 business days · tracked end-to-end",
  },
];

const ZONES = [
  { zone: "Within same city", time: "1–2 business days" },
  { zone: "Within same country", time: "2–4 business days" },
  { zone: "Cross-border (NG ↔ GH ↔ BJ)", time: "3–7 business days" },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <InfoPageHero
        label="Shipping"
        title="Flexible delivery, your way."
        description="Choose how your order gets to you. Delivery fees and timelines are confirmed with the seller before you complete your purchase."
      />

      <section className="container-custom max-w-3xl pb-20">
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {OPTIONS.map((opt) => (
            <div
              key={opt.title}
              className="p-6 rounded-2xl"
              style={{ border: "1.5px solid #E8E8E8" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "#3DFF7F" }}
              >
                <opt.icon className="w-5 h-5" style={{ color: "#11141C" }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#11141C" }}>{opt.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#666" }}>{opt.description}</p>
              <p className="text-xs font-semibold" style={{ color: "#11141C" }}>{opt.timeline}</p>
            </div>
          ))}
        </div>

        <InfoBlock title="Estimated delivery times">
          {ZONES.map((z) => (
            <div key={z.zone} className="flex justify-between py-2" style={{ borderBottom: "1px solid #F0F0F0" }}>
              <span>{z.zone}</span>
              <span className="font-medium" style={{ color: "#11141C" }}>{z.time}</span>
            </div>
          ))}
        </InfoBlock>

        <InfoBlock title="How to choose delivery at checkout">
          <p>When messaging a seller, confirm:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivery method (seller or SA-Errandlogistics)</li>
            <li>Delivery address and contact number</li>
            <li>Estimated delivery date</li>
            <li>Delivery cost (if any)</li>
          </ul>
          <p className="mt-2">
            Payment for the product and delivery is arranged directly between you and the seller.
          </p>
        </InfoBlock>

        <InfoBlock title="Tracking your order">
          <p>
            For SA-Errandlogistics shipments, you'll receive tracking updates via messaging once
            the seller dispatches your order. For seller-managed delivery, contact the seller
            directly for status updates.
          </p>
        </InfoBlock>

        <div className="flex items-center gap-3 p-5 rounded-2xl mt-6" style={{ backgroundColor: "#F7F7F5" }}>
          <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#3DFF7F" }} />
          <p className="text-sm" style={{ color: "#666" }}>
            Questions about a specific delivery?{" "}
            <InfoLink href="/contact">Contact support</InfoLink> or message the seller directly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
