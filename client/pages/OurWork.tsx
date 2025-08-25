import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { ExternalLink, Calendar, Tag } from "lucide-react";

const OurWork = () => {
  const projects = [
    {
      id: 1,
      title: "EcoCommerce Platform",
      category: "E-commerce",
      year: "2024",
      description:
        "A sustainable e-commerce platform focusing on eco-friendly products with minimal environmental impact.",
      tags: ["React", "Node.js", "Stripe", "Sustainability"],
      image: "/project-1.jpg",
    },
    {
      id: 2,
      title: "MindfulSpace App",
      category: "Health & Wellness",
      year: "2023",
      description:
        "A meditation and mindfulness app designed with privacy-first principles and calming aesthetics.",
      tags: ["React Native", "TypeScript", "Privacy", "Wellness"],
      image: "/project-2.jpg",
    },
    {
      id: 3,
      title: "LocalArt Gallery",
      category: "Art & Culture",
      year: "2023",
      description:
        "Digital platform connecting local artists with art enthusiasts in their community.",
      tags: ["Next.js", "Prisma", "Community", "Art"],
      image: "/project-3.jpg",
    },
    {
      id: 4,
      title: "CleanEnergy Dashboard",
      category: "Sustainability",
      year: "2024",
      description:
        "Analytics dashboard for renewable energy companies to track and optimize their green initiatives.",
      tags: ["Vue.js", "D3.js", "Analytics", "Energy"],
      image: "/project-4.jpg",
    },
    {
      id: 5,
      title: "StudyBuddy Platform",
      category: "Education",
      year: "2023",
      description:
        "Collaborative learning platform that helps students connect and study together effectively.",
      tags: ["React", "WebRTC", "Education", "Collaboration"],
      image: "/project-5.jpg",
    },
    {
      id: 6,
      title: "MinimalBlog CMS",
      category: "Content Management",
      year: "2024",
      description:
        "A distraction-free content management system for writers and bloggers who value simplicity.",
      tags: ["Svelte", "Markdown", "CMS", "Writing"],
      image: "/project-6.jpg",
    },
  ];

  const categories = [
    "All",
    "E-commerce",
    "Health & Wellness",
    "Art & Culture",
    "Sustainability",
    "Education",
    "Content Management",
  ];

  return (
    <>
      <SEO
        title="Our Work - Dumb Potato Portfolio"
        description="Explore our portfolio of beautiful, privacy-focused digital solutions. From e-commerce platforms to wellness apps, see how we create meaningful digital experiences."
        keywords="portfolio, web development projects, digital solutions, case studies, client work, creative projects"
        url="https://dumbpotato.com/our-work"
      />

      <Navigation />

      <main className="bg-cream-50 min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-judson text-5xl md:text-7xl lg:text-8xl text-dark-950 mb-8">
                Our <span className="text-orange-500 italic">Work</span>
              </h1>
              <p className="font-bricolage text-xl text-dark-950 leading-relaxed max-w-3xl mx-auto">
                A curated collection of projects that showcase our commitment to
                creating beautiful, functional, and privacy-respecting digital
                experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 font-bricolage text-sm rounded-full border border-cream-300 bg-white/20 backdrop-blur-sm hover:bg-orange-500 hover:text-cream-50 hover:border-orange-500 transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 ">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Our Creative Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep
                number="01"
                title="Discovery"
                description="We start by understanding your vision, goals, and target audience through detailed research and planning."
              />
              <ProcessStep
                number="02"
                title="Design"
                description="Our design team creates beautiful, user-centered interfaces that align with your brand and objectives."
              />
              <ProcessStep
                number="03"
                title="Development"
                description="We build robust, scalable solutions using modern technologies and best practices."
              />
              <ProcessStep
                number="04"
                title="Launch & Support"
                description="We ensure a smooth launch and provide ongoing support to keep your project running optimally."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-bricolage text-lg text-dark-950 mb-8 max-w-2xl mx-auto">
              Let's work together to create something beautiful and meaningful.
              We'd love to hear about your vision and explore how we can bring
              it to life.
            </p>
            <button className="px-8 py-4 bg-orange-500 text-cream-50 font-bricolage text-base rounded-xl hover:bg-orange-600 transition-colors duration-200 shadow-lg">
              Start a Conversation
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project }: { project: any }) => (
  <div className="group bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-cream-300/30 hover:shadow-xl transition-all duration-300">
    <div className="aspect-video bg-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-dark-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <ExternalLink className="w-8 h-8 text-white" />
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-3">
        <span className="text-orange-500 font-bricolage text-sm font-medium">
          {project.category}
        </span>
        <div className="flex items-center gap-1 text-dark-950/60">
          <Calendar className="w-4 h-4" />
          <span className="font-bricolage text-sm">{project.year}</span>
        </div>
      </div>
      <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-3">
        {project.title}
      </h3>
      <p className="font-bricolage text-sm text-dark-950 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 bg-cream-200/50 text-dark-950 font-bricolage text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Process Step Component
const ProcessStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-orange-500 text-cream-50 rounded-full flex items-center justify-center font-bricolage text-xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-3">
      {title}
    </h3>
    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">
      {description}
    </p>
  </div>
);

export default OurWork;
