import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Users, Target, Award, Heart } from "lucide-react";

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
                We are a passionate team of designers and developers who believe
                in creating digital experiences that prioritize user privacy,
                beautiful design, and meaningful functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-8">
                  Our Mission
                </h2>
                <p className="font-bricolage text-lg text-dark-950 leading-relaxed mb-6">
                  To create a calmer, more thoughtful internet where technology
                  serves humanity without compromising privacy or overwhelming
                  users with unnecessary distractions.
                </p>
                <p className="font-bricolage text-lg text-dark-950 leading-relaxed">
                  We believe that digital solutions should enhance productivity
                  and creativity while respecting user data and promoting
                  mindful interaction with technology.
                </p>
              </div>
              <div className="w-full h-80 bg-gray-300 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-cream-100/50">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<Heart className="w-8 h-8" />}
                title="Privacy First"
                description="We prioritize user privacy and data protection in every project we undertake."
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
        <section className="py-20 px-4">
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
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 bg-cream-100/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-8 text-center">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-dark-950 leading-relaxed">
                <p className="font-bricolage">
                  Dumb Potato was born from a simple observation: the internet
                  had become too noisy, too intrusive, and too complicated. We
                  started with a vision to create digital experiences that would
                  be calmer, more respectful, and more focused on what truly
                  matters.
                </p>
                <p className="font-bricolage">
                  Our name, "Dumb Potato," reflects our philosophy of
                  simplicity. Like a potato, we believe in being grounded,
                  reliable, and nourishing. The "dumb" part reminds us to keep
                  things simple and not overthink solutions that should be
                  elegant and straightforward.
                </p>
                <p className="font-bricolage">
                  Since our founding, we've worked with companies of all sizes,
                  from startups to established enterprises, helping them create
                  digital products that their users actually love to use.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-cream-300 px-4 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Follow Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4 opacity-80">
                <div className="w-4 h-4 bg-dark-950"></div>
                <div className="w-4 h-4 bg-dark-950"></div>
                <div className="w-4 h-4 bg-dark-950"></div>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">
                About Us
              </h3>
              <div className="space-y-2 text-dark-900">
                <a
                  href="#"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Team & Contributors
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Know Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">
                know us!
              </h3>
              <div className="space-y-2 text-dark-900">
                <a
                  href="#"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Our Work
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Our way to work
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Services
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">
                Contact us
              </h3>
              <div className="space-y-2 text-dark-900">
                <p>info@dumbpotato.com</p>
                <p>+91-9904538757</p>
                <p className="text-sm">
                  B-414, 11th Floor, Privilion, Isckon Cross-road
                  <br />
                  Ahmedabad - 380001
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-dark-900/20 text-center">
            <p className="font-bricolage text-base text-dark-900">
              Made with ❤️ by the{" "}
              <span className="text-orange-500 font-bold">dumb potato</span>
            </p>
          </div>
        </div>
      </footer>
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
