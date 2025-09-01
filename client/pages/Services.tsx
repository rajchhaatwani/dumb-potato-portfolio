import ContactModal from "@/components/ContactModal";
import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import ScheduleCallButton from "@/components/ScheduleCallButton";
import SEO from "@/components/SEO";
import { Code, Palette, Search, Shield, Smartphone, Globe } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Ready",
        "Accessibility Compliant",
      ],
      // pricing: "Starting from $2,500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that provide exceptional user experiences.",
      features: [
        "iOS & Android",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Maintenance & Updates",
      ],
      // pricing: "Starting from $5,000",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that prioritize user experience and accessibility.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
      // pricing: "Starting from $1,500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms that drive sales and provide smooth shopping experiences.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Processing",
        "Analytics & Reporting",
      ],
      // pricing: "Starting from $3,500",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Strategic digital marketing services to help your business reach and engage your target audience.",
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media Strategy",
        "Analytics & Insights",
      ],
      // pricing: "Starting from $1,000/month",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "CRM & ERP Solutions",
      description:
        "Tailored CRM and ERP implementations that streamline operations, enhance collaboration, and give you a 360° view of your business.",
      features: [
        "Custom CRM & ERP Setup",
        "Workflow Automation",
        "Third-Party Integrations",
        "Scalable for Growth",
      ],
      // pricing: "Starting from $3,500",
    },
  ];

  return (
    <>
      <SEO
        title="Services - Dumb Potato Digital Solutions"
        description="Comprehensive digital services including web development, mobile apps, UI/UX design, e-commerce solutions, and privacy-focused development. Get a quote today."
        keywords="web development, mobile app development, UI UX design, e-commerce, digital marketing, privacy security, development services"
        url="https://dumbpotato.com/services"
      />

      <Navigation />

      <main className="bg-cream-50 min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-judson text-5xl md:text-7xl lg:text-8xl text-dark-950 mb-8">
                Our <span className="text-orange-500 italic">Services</span>
              </h1>
              <p className="font-bricolage text-xl text-dark-950 leading-relaxed max-w-3xl mx-auto">
                We offer comprehensive digital solutions designed to help your
                business thrive in the digital landscape while maintaining the
                highest standards of privacy and quality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Our Service Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <ProcessStep
                  step="01"
                  title="Consultation & Discovery"
                  description="We begin with a detailed consultation to understand your needs, goals, and challenges. This discovery phase helps us create a tailored solution that fits your specific requirements."
                />
                <ProcessStep
                  step="02"
                  title="Planning & Strategy"
                  description="Based on our discovery findings, we develop a comprehensive project plan with clear timelines, milestones, and deliverables. We also create a strategic approach that aligns with your business objectives."
                />
                <ProcessStep
                  step="03"
                  title="Design & Development"
                  description="Our team brings your vision to life through thoughtful design and robust development. We maintain open communication throughout this phase to ensure we're always aligned with your expectations."
                />
                <ProcessStep
                  step="04"
                  title="Testing & Refinement"
                  description="Before launch, we thoroughly test every aspect of your project. We conduct user testing, performance optimization, and security checks to ensure everything meets our high standards."
                />
                <ProcessStep
                  step="05"
                  title="Launch & Support"
                  description="We handle the technical aspects of launching your project and provide comprehensive training. Our ongoing support ensures your project continues to perform optimally after launch."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Why Choose Dumb Potato?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="End-to-End Expertise"
                description="From strategy to execution, we handle the entire journey so you don’t need to juggle multiple vendors."
              />
              <FeatureCard
                title="Quality Focused"
                description="Every project undergoes rigorous quality assurance to ensure it meets our high standards for performance, security, and user experience."
              />
              <FeatureCard
                title="Transparent Communication"
                description="We believe in clear, honest communication throughout the entire project lifecycle. You'll always know what we're working on and why."
              />
              <FeatureCard
                title="Ongoing Support"
                description="Our relationship doesn't end at launch. We provide ongoing support and maintenance to keep your project running smoothly."
              />
              <FeatureCard
                title="Modern Technologies"
                description="We use cutting-edge technologies and best practices to ensure your project is built for the future and can scale with your business."
              />
              <FeatureCard
                title="Collaborative Approach"
                description="We work as an extension of your team, collaborating closely to ensure the final product exceeds your expectations."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto text-center">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-bricolage text-lg text-dark-950 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your
              vision to life. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-orange-500 text-cream-50 font-bricolage text-base rounded-xl hover:bg-orange-600 transition-colors duration-200 shadow-lg"
              >
                Get a Quote
              </button>

              <ScheduleCallButton />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

// Service Card Component
const ServiceCard = ({ service }: { service: any }) => (
  <div className="p-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-cream-300/30 hover:shadow-xl transition-all duration-300">
    <div className="text-orange-500 mb-6">{service.icon}</div>
    <h3 className="font-bricolage text-2xl font-bold text-dark-950 mb-4">
      {service.title}
    </h3>
    <p className="font-bricolage text-dark-950 mb-6 leading-relaxed">
      {service.description}
    </p>
    <ul className="space-y-2 mb-6">
      {service.features.map((feature: string, index: number) => (
        <li
          key={index}
          className="font-bricolage text-sm text-dark-950 flex items-center"
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
          {feature}
        </li>
      ))}
    </ul>
    {/* <div className="border-t border-cream-300/30 pt-4">
      <p className="font-bricolage text-orange-500 font-semibold">
        {service.pricing}
      </p>
    </div> */}
  </div>
);

// Process Step Component
const ProcessStep = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-orange-500 text-cream-50 rounded-full flex items-center justify-center font-bricolage text-lg font-bold">
        {step}
      </div>
    </div>
    <div>
      <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-3">
        {title}
      </h3>
      <p className="font-bricolage text-dark-950 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-cream-300/30">
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-3">
      {title}
    </h3>
    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">
      {description}
    </p>
  </div>
);

export default Services;
