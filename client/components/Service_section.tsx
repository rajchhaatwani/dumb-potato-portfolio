import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "IT Consultancy",
    description:
      "We guide businesses in adopting the right technologies to solve challenges, improve efficiency, and scale with confidence. Our consultancy bridges strategy and execution.",
    src: "/animations/Consultant.lottie",
  },
  {
    title: "Brand Identity & Creation",
    description:
      "We craft brand identities that stand out. From logos and visuals to tone and messaging, we create a consistent brand experience that builds trust and recognition.",
    src: "/animations/graphic_design.lottie",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually engaging designs that put users first. We combine research, prototyping, and testing to deliver experiences that look great and work seamlessly.",
    src: "/animations/Responsive_design.lottie",
  },
  {
    title: "Web & Mobile Development",
    description:
      "From websites to mobile apps, we build fast, secure, and user-friendly digital solutions. Every project is responsive, SEO-ready, and optimized for performance.",
    src: "/animations/PC_Coding_and_Display_app_Mobile.lottie",
  },
  {
    title: "CRM & ERP Solutions",
    description:
      "We implement and customize powerful CRM and ERP platforms like Salesforce and Odoo. Our solutions streamline operations, sales, and customer management.",
    src: "/animations/erp_cms.lottie",
  },
  {
    title: "Digital Marketing",
    description:
      "Increase your online visibility with smart digital marketing strategies. From SEO and content to social media and analytics, we help you connect with the right audience.",
    src: "/animations/marketing.lottie",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative px-4 mb-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side cards */}
          <div className="w-full">
            <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Services We Provide
            </h2>
            <p className="font-bricolage text-base text-muted-foreground mb-8 leading-relaxed">
              At dumb potato, we deliver end-to-end digital solutions that help
              businesses grow, scale, and stand out online. From strategy and
              branding to development and marketing, we turn ideas into results.
            </p>

            <div className="space-y-10">
              {services.map((service, index) => (
                <div key={index} className="w-full">
                  {/* Card */}
                  <div
                    className={`p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream-300/30 cursor-pointer transition-all ${
                      activeIndex === index ? "bg-white/20 border-white/40" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-2">
                      {service.title}
                    </h3>
                    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Mobile animation block */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 block lg:hidden"
                      >
                        <DotLottieReact
                          src={service.src}
                          loop
                          autoplay
                          className="w-full h-72 rounded-2xl shadow-lg border border-border"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right sticky animation (desktop only) */}
          <div className="sticky top-24 hidden lg:block">
            <DotLottieReact
              src={services[activeIndex]?.src}
              loop
              autoplay
              className="w-full h-96 rounded-3xl opacity-80 shadow-lg border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
