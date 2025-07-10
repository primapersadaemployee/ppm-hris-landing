import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
// import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ContactSection } from "@/components/landing/contact-section";
import { PreviewSection } from "@/components/landing/preview-section";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        {/* <section id="testimonials">
          <TestimonialsSection />
        </section> */}
        <section id="preview">
          <PreviewSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
