import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { ArrowRight, Github, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import Stats from "@/components/Stats";
import Footer from "@/components/footer";
import waveAnimation from "../assets/Wave_Animation.json";
import Consultant from "../assets/Consultant.json";
import brand_identity from "../assets/marketing.json";
import crm_erp from "../assets/leads_analysis.json";
import Web_Mobile_Dev from "../assets/Web_Mobile_Dev.json";
import Synchroma_Branding from "../assets/Synchroma_Branding.json";
import ServicesSection from "@/components/Service_section";

const Index = () => {
  return (
    <>
      <SEO
        title="Dumb Potato - IT Consulatancy"
        description="Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data."
        keywords="web development, digital solutions, creative agency, UI/UX design, privacy-focused, portfolio"
      />

      <Navigation />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto text-center relative z-10">
            {/* ... (rest of the hero section is unchanged) ... */}
            <div className="mb-8">
              <h1 className="font-judson text-6xl md:text-8xl lg:text-9xl leading-none">
                <span className="text-foreground">we provide solutions </span>
                <span className="text-orange-500 italic">which helps </span>
                <span className="text-foreground">people.</span>
              </h1>
            </div>
            <div className="mb-12 space-y-2">
              <p className="font-bricolage text-[28px] text-muted-foreground max-w-md mx-auto">
                Choose Dumb.
              </p>
              <p className="font-bricolage text-[28px] text-muted-foreground max-w-md mx-auto mt-[0!important]">
                Think Smart.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="flex relative items-center gap-3 px-8 py-4 bg-secondary rounded-xl font-bricolage text-sm text-secondary-foreground hover: transition-colors duration-200 shadow-lg"
              >
                Start Your Journey with us
                <ArrowRight className="w-6 h-6" />
                <div className="absolute">
                  <DotLottieReact
                    src="./animations/ottiechargement.lottie"
                    loop
                    autoplay
                    className="w-64 h-64"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Large Image Section */}
        <section className="px-4 mb-20">
          <div className="container flex flex-col justify-center items-center">
            <div className="w-full rounded-2xl border border-white/20 bg-white/10 dark:bg-background/50 backdrop-blur-sm shadow-md p-6 md:p-8">
              <div className="mb-6 text-center">
                <h3 className="font-bricolage text-lg md:text-xl text-foreground/80">
                  Trusted by businesses worldwide
                </h3>
              </div>
              <div className="text-center">
                <Stats />
              </div>
            </div>
          </div>
        </section>

        <ServicesSection/>
        
        {/* Core Values Section */}
        {/* <section className="relative px-4 mb-20">
          <div className="container mx-auto text-center relative z-10">
            <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span>Our</span> <span>Core</span> <span>Values</span>
            </h2>
            <p className="font-bricolage text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              We make it not only a priority, but a necessity to ensure that
              dumbpotato always strikes the right balance between beauty,
              performance, and privacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <ValueCard
                icon={<Github className="w-6 h-6" />}
                text="Free and open-source"
              />
              <ValueCard
                icon={<Check className="w-6 h-6" />}
                text="Simple yet powerful"
              />
              <ValueCard
                icon={<Check className="w-6 h-6" />}
                text="Private and always up-to-date"
              />
            </div>
            <div className="w-full h-96 lg:h-[500px] rounded-3xl shadow-lg border border-border"></div>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
};

const ValueCard = ({ icon, text }) => (
  <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-cream-300/30">
    <div className="text-cream-300">{icon}</div>
    <span className="font-bricolage text-sm text-dark-950">{text}</span>
  </div>
);

export default Index;
