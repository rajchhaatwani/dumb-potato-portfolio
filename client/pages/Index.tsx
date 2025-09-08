import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { ArrowRight, Github, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Stats from "@/components/Stats";
import Footer from "@/components/footer";
import ServicesSection from "@/components/Service_section";
import { logEvent } from "@/lib/analytics";

const Index = () => {
  return (
    <>
      <SEO
        title="dumb Potato - IT Consulatancy"
        description="Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data."
        keywords="web development, digital solutions, creative agency, UI/UX design, privacy-focused, portfolio"
      />

      {/* Navigation tracking (logo or nav clicks are inside Navigation) */}
      <Navigation />

      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto text-center relative z-10">
            {/* Headline Impression */}
            <h1
              className="font-judson text-6xl md:text-8xl lg:text-9xl leading-none"
              onMouseEnter={() =>
                logEvent("headline_hover", "Homepage", "Hero Section Headline")
              }
            >
              <span className="text-foreground ">we provide solutions </span>
              <span className="text-orange-500 italic inline-block relative">
                which helps
              </span>
              <span className="text-foreground"> people.</span>
            </h1>

            {/* Tagline Tracking */}
            <div className="mb-12 space-y-2">
              <p
                className="font-bricolage text-[28px] text-muted-foreground max-w-md mx-auto"
                onMouseEnter={() =>
                  logEvent("tagline_hover", "Homepage", "Tagline - Choose dumb.")
                }
              >
                Choose dumb.
              </p>
              <p
                className="font-bricolage text-[28px] text-muted-foreground max-w-md mx-auto !mt-[0]"
                onMouseEnter={() =>
                  logEvent("tagline_hover", "Homepage", "Tagline - Think Smart.")
                }
              >
                Think Smart.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="flex relative items-center gap-3 px-8 py-4 bg-secondary rounded-xl font-bricolage text-sm text-secondary-foreground hover: transition-colors duration-200 shadow-lg"
                onClick={() =>
                  logEvent("cta_click", "Homepage", "Hero Section CTA")
                }
              >
                Start Your Journey with us
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats section tracking */}
        <div onMouseEnter={() => logEvent("section_view", "Homepage", "Stats Section")}>
          <Stats />
        </div>

        {/* Services section tracking */}
        <div
          onMouseEnter={() =>
            logEvent("section_view", "Homepage", "Services Section")
          }
        >
          <ServicesSection />
        </div>

        {/* Footer tracking */}
        <div onMouseEnter={() => logEvent("section_view", "Homepage", "Footer")}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
