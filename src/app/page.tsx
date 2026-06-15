import { AboutSection } from "@/components/about-section";
import { ArticlesSection } from "@/components/articles-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <FaqSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
