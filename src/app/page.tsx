import { ArticlesSection } from "@/components/articles-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <FaqSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
