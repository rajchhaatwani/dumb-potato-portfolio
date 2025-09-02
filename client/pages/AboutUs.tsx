import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Users, Target, Award, Heart } from "lucide-react";
import aboutUs from "../assets/about-us.json"
import Lottie from "lottie-react";
const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us - Dumb Potato"
        description="Learn about Dumb Potato's mission, vision, and the passionate team behind our creative digital solutions. We're committed to building beautiful, privacy-focused experiences."
        keywords="about us, team, mission, vision, creative agency, web development team, digital solutions"
        url="https://dumbpotato.com/about"
      />

      <Navigation />

      <main className="bg-background min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-judson text-5xl md:text-7xl lg:text-8xl text-dark-950 mb-8">
                About <span className="text-orange-500 italic">Us</span>
              </h1>
              <p className="font-bricolage text-xl text-dark-950 leading-relaxed max-w-3xl mx-auto">
                At Dumb Potato, we believe technology doesn’t have to be
                complicated—it just needs to work smart. We’re a curious bunch
                of developers, designers, and problem-solvers who love turning
                complex digital challenges into clean, simple solutions that
                actually make sense.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-bricolage md:text-4xl text-3xl font-bold text-dark-950 mb-8">
                  Why <span className="text-orange-500">'Dumb potato'</span> ?
                </h2>
                <p className="font-bricolage text-lg text-dark-950 leading-relaxed mb-6">
                  At <span className="text-orange-500">Dumb potato</span> we
                  make sure that technology should never feel overwhelming. Our
                  focus is on removing complexity, cutting through unnecessary
                  jargon, and delivering solutions that are practical, reliable,
                  and built to drive measurable results for your business.
                </p>
              </div>
              <div className="w-full rounded-2xl">
                <Lottie animationData={aboutUs} loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <h2 className="font-bricolage md:text-4xl text-3xl font-bold text-dark-950 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<Heart className="w-8 h-8" />}
                title="Transparent"
                description="We believe in open communication throughout every project phase, keeping you informed with clear reporting and honest progress updates."
              />
              <ValueCard
                icon={<Target className="w-8 h-8" />}
                title="Purpose-Driven"
                description="Every design decision is made with intention and purpose, focusing on user needs."
              />
              <ValueCard
                icon={<Award className="w-8 h-8" />}
                title="Quality Focused"
                description="We maintain the highest standards of code quality and design excellence."
              />
              <ValueCard
                icon={<Users className="w-8 h-8" />}
                title="Collaborative"
                description="We work closely with our clients as partners in bringing their vision to life."
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember
                name="Alex Johnson"
                role="Creative Director"
                description="With over 8 years in digital design, Alex leads our creative vision and ensures every project meets our high standards."
              />
              <TeamMember
                name="Sarah Chen"
                role="Lead Developer"
                description="Sarah brings technical excellence and innovative solutions to every development challenge we face."
              />
              <TeamMember
                name="Michael Rodriguez"
                role="UX Designer"
                description="Michael focuses on creating intuitive user experiences that delight and engage our clients' audiences."
              />
            </div>
          </div>
        </section> */}

        {/* Story Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-bricolage md:text-4xl text-3xl font-bold text-dark-950 mb-8 text-center">
                Our Expertise in Digital Transformation
              </h2>
              <div className="space-y-6 text-lg text-dark-950 leading-relaxed">
                <p className="font-bricolage">
                  At Dumb Potato, we specialize in IT consultancy, custom web
                  development, digital marketing, and brand identity creation.
                  Our team helps businesses transform their digital presence
                  with scalable websites, tailored software solutions, and
                  data-driven strategies. From planning IT infrastructure to
                  designing seamless user experiences, we ensure that every
                  project is built for performance, security, and long-term
                  growth.
                </p>
                <p className="font-bricolage">
                  We have experience working with startups, SMEs, and
                  enterprises, we bring a balanced mix of technical expertise,
                  creative design, and business strategy. Whether you need a
                  high-performing business website, a custom web application, or
                  a digital growth strategy, we partner with you to create
                  solutions that deliver measurable results and lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Value Card Component
const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-cream-300/30 text-center">
    <div className="text-orange-500 mb-4 flex justify-center">{icon}</div>
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-3">
      {title}
    </h3>
    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">
      {description}
    </p>
  </div>
);

// Team Member Component
const TeamMember = ({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) => (
  <div className="text-center">
    <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6"></div>
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-2">
      {name}
    </h3>
    <p className="font-bricolage text-orange-500 mb-4">{role}</p>
    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">
      {description}
    </p>
  </div>
);

export default AboutUs;
