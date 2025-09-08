import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Users, Lightbulb, Cog, Rocket, Heart, Shield } from "lucide-react";

const OurWayToWork = () => {
  const principles = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centered Design",
      description:
        "We put people at the center of everything we create. Every decision is made with the end user in mind, ensuring our solutions are intuitive, accessible, and meaningful.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy by Design",
      description:
        "Privacy isn't an afterthought—it's built into every layer of our development process. We ensure user data is protected from the ground up.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Partnership",
      description:
        "We believe the best results come from true collaboration. We work as an extension of your team, not just an external vendor.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Iterative Innovation",
      description:
        "We embrace an iterative approach, constantly refining and improving based on feedback and new insights. This ensures we deliver the best possible solution.",
    },
  ];

  const methodology = [
    {
      phase: "Discovery",
      duration: "1-2 weeks",
      description:
        "We start by deeply understanding your business, users, and goals through research, interviews, and analysis.",
      activities: [
        "Stakeholder interviews",
        "User research",
        "Competitive analysis",
        "Technical assessment",
      ],
      outcome: "Clear project scope and requirements",
    },
    {
      phase: "Strategy & Planning",
      duration: "1 week",
      description:
        "Based on our discovery findings, we develop a comprehensive strategy and detailed project plan.",
      activities: [
        "Information architecture",
        "User journey mapping",
        "Technical planning",
        "Project roadmap",
      ],
      outcome: "Detailed project plan and timeline",
    },
    {
      phase: "Design",
      duration: "1 weeks",
      description:
        "We create beautiful, functional designs that align with your brand and serve your users' needs.",
      activities: [
        "Wireframing",
        "Visual design",
        "Prototyping",
        "Design system creation",
      ],
      outcome: "Complete design system and prototypes",
    },
    {
      phase: "Development",
      duration: "4-6 weeks",
      description:
        "Our developers bring the designs to life using modern technologies and best practices.",
      activities: [
        "Frontend development",
        "Backend development",
        "Database design",
        "API integration",
      ],
      outcome: "Fully functional application",
    },
    {
      phase: "Testing & Refinement",
      duration: "1 weeks",
      description:
        "Thorough testing ensures everything works perfectly before launch.",
      activities: [
        "Quality assurance",
        "User testing",
        "Performance optimization",
        "Security testing",
      ],
      outcome: "Production-ready solution",
    },
    {
      phase: "Launch & Support",
      duration: "1 week",
      description:
        "We handle the launch and provide ongoing support to ensure continued success.",
      activities: [
        "Deployment",
        "Training",
        "Documentation",
        "Ongoing maintenance",
      ],
      outcome: "Successful launch and continued support",
    },
  ];

  return (
    <>
      <SEO
        title="Our Way to Work - dumb Potato Methodology"
        description="Discover our human-centered, privacy-first approach to digital development. Learn about our collaborative methodology and principles that guide every project."
        keywords="methodology, work process, agile development, user-centered design, privacy-first development, collaborative approach"
        url="https://dumbpotato.com/our-way-to-work"
      />

      <Navigation />

      <main className="bg-cream-50 min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-judson text-5xl md:text-7xl lg:text-8xl text-dark-950 mb-8">
                Our Way to <span className="text-orange-500 italic">Work</span>
              </h1>
              <p className="font-bricolage text-xl text-dark-950 leading-relaxed max-w-3xl mx-auto">
                Our methodology is built on principles of collaboration,
                transparency, and human-centered design. We believe great
                digital products are created through thoughtful process and
                genuine partnership.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Our Core Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <PrincipleCard key={index} principle={principle} />
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Our Development Methodology
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {methodology.map((phase, index) => (
                  <MethodologyPhase key={index} phase={phase} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Tools & Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ToolCategory
                title="Design"
                tools={[
                  "Figma",
                  "Adobe Creative Suite",
                  "Sketch",
                  "InVision",
                  "Principle",
                ]}
              />
              <ToolCategory
                title="Development"
                tools={[
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                ]}
              />
              <ToolCategory
                title="Collaboration"
                tools={["Slack", "Linear", "GitHub", "Notion", "Zoom"]}
              />
            </div>
          </div>
        </section>

        {/* Values in Action Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Our Values in Action
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <ValueInAction
                  title="Transparency"
                  description="We believe in complete transparency throughout the project lifecycle. You'll have access to our project management tools, regular updates, and can track progress in real-time."
                />
                <ValueInAction
                  title="Quality"
                  description="Every line of code is reviewed, every design is tested, and every feature is polished. We don't compromise on quality because your success depends on it."
                />
                <ValueInAction
                  title="Sustainability"
                  description="We build for the long term, creating solutions that are maintainable, scalable, and environmentally conscious through efficient code and hosting practices."
                />
              </div>
              <div className="w-full h-96 bg-gray-300 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Communication Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-8">
                Communication is Key
              </h2>
              <p className="font-bricolage text-lg text-dark-950 leading-relaxed mb-12">
                We believe great projects are built on great communication.
                Here's how we keep everyone aligned and informed throughout the
                development process.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <CommunicationMethod
                  title="Regular Check-ins"
                  description="Weekly progress meetings to discuss achievements, challenges, and next steps."
                />
                <CommunicationMethod
                  title="Real-time Updates"
                  description="Access to our project dashboard where you can see real-time progress and updates."
                />
                <CommunicationMethod
                  title="Open Door Policy"
                  description="Direct access to our team whenever you have questions or concerns."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-6">
              Ready to Work Together?
            </h2>
            <p className="font-bricolage text-lg text-dark-950 mb-8 max-w-2xl mx-auto">
              Experience our collaborative approach firsthand. Let's discuss
              your project and see how our methodology can bring your vision to
              life.
            </p>
            <button className="px-8 py-4 bg-orange-500 text-cream-50 font-bricolage text-base rounded-xl hover:bg-orange-600 transition-colors duration-200 shadow-lg">
              Start Your Project
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
};

// Principle Card Component
const PrincipleCard = ({ principle }: { principle: any }) => (
  <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-cream-300/30">
    <div className="text-orange-500 mb-6">{principle.icon}</div>
    <h3 className="font-bricolage text-2xl font-bold text-dark-950 mb-4">
      {principle.title}
    </h3>
    <p className="font-bricolage text-dark-950 leading-relaxed">
      {principle.description}
    </p>
  </div>
);

// Methodology Phase Component
const MethodologyPhase = ({ phase, index }: { phase: any; index: number }) => (
  <div className="flex gap-8">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 bg-orange-500 text-cream-50 rounded-full flex items-center justify-center font-bricolage text-xl font-bold">
        {index + 1}
      </div>
    </div>
    <div className="flex-grow">
      <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-cream-300/30">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
          <h3 className="font-bricolage text-2xl font-bold text-dark-950">
            {phase.phase}
          </h3>
          <span className="font-bricolage text-orange-500 text-sm font-medium">
            {phase.duration}
          </span>
        </div>
        <p className="font-bricolage text-dark-950 mb-6 leading-relaxed">
          {phase.description}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bricolage text-lg font-semibold text-dark-950 mb-3">
              Key Activities
            </h4>
            <ul className="space-y-1">
              {phase.activities.map((activity: string, idx: number) => (
                <li
                  key={idx}
                  className="font-bricolage text-sm text-dark-950 flex items-center"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bricolage text-lg font-semibold text-dark-950 mb-3">
              Outcome
            </h4>
            <p className="font-bricolage text-sm text-dark-950">
              {phase.outcome}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Tool Category Component
const ToolCategory = ({ title, tools }: { title: string; tools: string[] }) => (
  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-cream-300/30">
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-4">
      {title}
    </h3>
    <div className="space-y-2">
      {tools.map((tool, index) => (
        <div key={index} className="flex items-center">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
          <span className="font-bricolage text-sm text-dark-950">{tool}</span>
        </div>
      ))}
    </div>
  </div>
);

// Value in Action Component
const ValueInAction = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <h3 className="font-bricolage text-2xl font-bold text-dark-950 mb-4">
      {title}
    </h3>
    <p className="font-bricolage text-dark-950 leading-relaxed">
      {description}
    </p>
  </div>
);

// Communication Method Component
const CommunicationMethod = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-cream-300/30">
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-3">
      {title}
    </h3>
    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">
      {description}
    </p>
  </div>
);

export default OurWayToWork;
