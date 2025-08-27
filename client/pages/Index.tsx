import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { ArrowRight, Github, Twitter, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import waveAnimation from "../assets/Wave_Animation.json";
import ottiechargement from "../assets/ottiechargement.json";
import Lottie from "lottie-react";

const Index = () => {
  return (
    <>
      <SEO
        title="Dumb Potato - IT Consulatancy"
        description="Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data."
        keywords="web development, digital solutions, creative agency, UI/UX design, privacy-focused, portfolio"
      />

      <Navigation />

      {/* IMPORTANT DEBUGGING STEP: 
        Inspect this <main> tag and any parent elements in your browser. 
        If any of them have a class that sets 'overflow: hidden' or 'overflow-x: hidden', 
        it will break the sticky effect. Remove that class if it exists.
      */}
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
                  <Lottie
                    animationData={ottiechargement}
                    loop
                    autoplay
                    className="w-full"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Large Image Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <div className="w-full h-96 rounded-xl border border-border"></div>
          </div>
        </section>

        {/* --- FINAL CORRECTED PRODUCTIVITY SECTION --- */}
        <section className="relative px-4 mb-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Services We Provide
                </h2>
                <p className="font-bricolage text-base text-muted-foreground mb-8 leading-relaxed">
                  At dumb potato, we deliver end-to-end digital solutions that
                  help businesses grow, scale, and stand out online. From
                  strategy and branding to development and marketing, we turn
                  ideas into results.
                </p>
                <div className="space-y-4">
                  <FeatureCard
                    title="IT Consultancy"
                    description="We guide businesses in adopting the right technologies to solve challenges, improve efficiency, and scale with confidence. Our consultancy bridges strategy and execution."
                  />
                  <FeatureCard
                    title="Brand Identity & Creation"
                    description="We craft brand identities that stand out. From logos and visuals to tone and messaging, we create a consistent brand experience that builds trust and recognition."
                  />
                  <FeatureCard
                    title="UI/UX Design"
                    description="Intuitive and visually engaging designs that put users first. We combine research, prototyping, and testing to deliver experiences that look great and work seamlessly."
                  />
                  <FeatureCard
                    title="Web & Mobile Development"
                    description="From websites to mobile apps, we build fast, secure, and user-friendly digital solutions. Every project is responsive, SEO-ready, and optimized for performance."
                  />
                  <FeatureCard
                    title="CRM & ERP Solutions"
                    description="We implement and customize powerful CRM and ERP platforms like Salesforce and Odoo. Our solutions streamline operations, sales, and customer management."
                  />
                  <FeatureCard
                    title="Digital Marketing"
                    description="Increase your online visibility with smart digital marketing strategies. From SEO and content to social media and analytics, we help you connect with the right audience."
                  />
                </div>
              </div>
              <div className="sticky top-24">
                <Lottie
                  animationData={waveAnimation}
                  loop
                  autoplay
                  className="w-full h-96 rounded-3xl opacity-80 shadow-lg border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative px-4 mb-20">
          <div className="container mx-auto text-center relative z-10">
            {/* ... (rest of the core values section is unchanged) ... */}
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
        </section>
      </main>

      <Footer />
    </>
  );
};

// ... (FeatureCard and ValueCard components remain the same)
const FeatureCard = ({ title, description }) => (
  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream-300/30">
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-2">
      {title}
    </h3>
    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">
      {description}
    </p>
  </div>
);

const ValueCard = ({ icon, text }) => (
  <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-cream-300/30">
    <div className="text-cream-300">{icon}</div>
    <span className="font-bricolage text-sm text-dark-950">{text}</span>
  </div>
);

export default Index;
