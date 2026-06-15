import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedCategories from "@/components/FeaturedCategories";
import PopularProducts from "@/components/PopularProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturedCategories />
      <PopularProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
