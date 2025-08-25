import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';
import { ArrowRight, Github, Twitter, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <SEO 
        title="Dumb Potato - Creative Digital Solutions"
        description="Beautifully designed, privacy-focused, and packed with features. We care about your experience, not your data."
        keywords="web development, digital solutions, creative agency, UI/UX design, privacy-focused, portfolio"
      />
      
      <Navigation />
      
      <main className="bg-cream-50 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="font-judson text-6xl md:text-8xl lg:text-9xl leading-none mb-4">
                <span className="text-dark-950">welcome to</span>
              </h1>
              <h1 className="font-judson text-6xl md:text-8xl lg:text-9xl leading-none">
                <span className="text-dark-950">a </span>
                <span className="text-orange-500 italic">calmer</span>
                <span className="text-dark-950"> internet</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="mb-12 space-y-2">
              <p className="font-bricolage text-base text-dark-950 max-w-md mx-auto">
                Beautifully designed, privacy-focused, and packed with features.
              </p>
              <p className="font-bricolage text-base text-dark-950 max-w-md mx-auto">
                We care about your experience, not your data.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="flex items-center gap-3 px-8 py-4 bg-cream-300 rounded-xl font-bricolage text-sm text-dark-900 hover:bg-cream-400 transition-colors duration-200 shadow-lg"
              >
                Start Your Journey with us
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 px-6 py-4 border border-dark-800 bg-white/10 backdrop-blur-sm rounded-xl font-bricolage text-sm text-dark-950 hover:bg-white/20 transition-colors duration-200"
              >
                know us ❤
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 opacity-80">
              <Github className="w-4 h-4 text-dark-950" />
              <Twitter className="w-4 h-4 text-dark-950" />
              <div className="w-4 h-4 bg-dark-950 rounded-sm" /> {/* Mastodon placeholder */}
              <Star className="w-4 h-4 text-dark-950" />
              <div className="w-4 h-4 bg-dark-950 rounded-full" /> {/* Discord placeholder */}
            </div>
          </div>
        </section>

        {/* Large Image Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <div className="w-full h-96 bg-gray-300 rounded-xl opacity-80 shadow-lg"></div>
          </div>
        </section>

        {/* Productivity Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div>
                <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
                  Productivity at its best
                </h2>
                <p className="font-bricolage text-base text-dark-950 mb-8 leading-relaxed">
                  We are packed with features that help you stay productive and focused. 
                  Solutions should be tools that help you get things done, not distractions 
                  that keep you from your work.
                </p>
                
                {/* Feature Cards */}
                <div className="space-y-4">
                  <FeatureCard
                    title="Workspaces"
                    description="Organize your projects into Workspaces to keep your work separate and organized, and switch between them with ease."
                  />
                  <FeatureCard
                    title="Compact Mode"
                    description="Our Compact Mode gives you more screen real estate by hiding unnecessary elements when you don't need them."
                  />
                  <FeatureCard
                    title="Glance"
                    description="Glance allows you to quickly switch between your most used projects, without having to scroll through your history."
                  />
                  <FeatureCard
                    title="Split View"
                    description="Split View allows you to view two projects side by side, making it easier to compare and switch between them."
                  />
                </div>
              </div>
              
              {/* Right Image */}
              <div className="relative">
                <div className="w-full h-80 bg-gray-300 rounded-3xl opacity-80 shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto text-center">
            <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
              Our Sponsors
            </h2>
            <div className="mb-6">
              <p className="font-bricolage text-base text-dark-950 mb-2">
                We are grateful to our sponsors for their support. They help us to keep the project alive.
              </p>
              <p className="font-bricolage text-base text-dark-950">
                You can also be part of this journey by{' '}
                <span className="text-orange-500">donating us directly</span>
              </p>
            </div>
            
            {/* Sponsor Logos */}
            <div className="flex justify-center items-center gap-8 opacity-80">
              <div className="w-64 h-16 bg-gray-300 rounded"></div>
              <div className="w-72 h-16 bg-gray-300 rounded"></div>
              <div className="w-44 h-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto text-center">
            <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-dark-950 mb-6">
              <span>Our</span> <span>Core</span> <span>Values</span>
            </h2>
            <p className="font-bricolage text-base text-dark-950 mb-8 max-w-2xl mx-auto">
              We make it not only a priority, but a necessity to ensure that dumbpotato 
              always strikes the right balance between beauty, performance, and privacy.
            </p>
            
            {/* Values */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <ValueCard icon={<Github className="w-6 h-6" />} text="Free and open-source" />
              <ValueCard icon={<Check className="w-6 h-6" />} text="Simple yet powerful" />
              <ValueCard icon={<Check className="w-6 h-6" />} text="Private and always up-to-date" />
            </div>
            
            {/* Large Screenshot */}
            <div className="w-full h-96 lg:h-[500px] bg-gray-300 rounded-3xl shadow-lg"></div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="relative px-4 pb-20">
          {/* Curved Background */}
          <div className="absolute inset-x-0 bottom-0 h-96 bg-cream-300 rounded-t-[500px] -mx-4"></div>
          
          <div className="container mx-auto relative">
            <div className="text-left max-w-lg">
              <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                dumb potato
              </h2>
              <p className="font-bricolage text-base text-dark-900 mb-8 leading-relaxed">
                Beautifully designed, privacy-focused, and packed with features. 
                We care about your experience, not your data.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-4 bg-dark-900 text-cream-50 font-bricolage text-sm rounded-xl hover:bg-dark-950 transition-colors duration-200 shadow-lg"
              >
                Download
                <ArrowRight className="w-6 h-6" />
              </Link>
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
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">Follow Us</h3>
              <div className="flex gap-4 opacity-80">
                <Github className="w-4 h-4 text-dark-950" />
                <Twitter className="w-4 h-4 text-dark-950" />
                <div className="w-4 h-4 bg-dark-950 rounded-sm" />
                <Star className="w-4 h-4 text-dark-950" />
                <div className="w-4 h-4 bg-dark-950 rounded-full" />
              </div>
            </div>
            
            {/* About Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">About Us</h3>
              <div className="space-y-2 text-dark-900">
                <Link to="/about" className="block hover:text-orange-500 transition-colors">Team & Contributors</Link>
                <a href="#" className="block hover:text-orange-500 transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            {/* Know Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">know us!</h3>
              <div className="space-y-2 text-dark-900">
                <Link to="/our-work" className="block hover:text-orange-500 transition-colors">Our Work</Link>
                <Link to="/our-way-to-work" className="block hover:text-orange-500 transition-colors">Our way to work</Link>
                <Link to="/services" className="block hover:text-orange-500 transition-colors">Services</Link>
              </div>
            </div>
            
            {/* Contact Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">Contact us</h3>
              <div className="space-y-2 text-dark-900">
                <p>info@dumbpotato.com</p>
                <p>+91-9904538757</p>
                <p className="text-sm">B-414, 11th Floor, Privilion, Isckon Cross-road<br/>Ahmedabad - 380001</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-dark-900/20 text-center">
            <p className="font-bricolage text-base text-dark-900">
              Made with ❤️ by the <span className="text-orange-500 font-bold">dumb potato</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-cream-300/30">
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-2">{title}</h3>
    <p className="font-bricolage text-sm text-dark-950 leading-relaxed">{description}</p>
  </div>
);

// Value Card Component  
const ValueCard = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-cream-300/30">
    <div className="text-cream-300">{icon}</div>
    <span className="font-bricolage text-sm text-dark-950">{text}</span>
  </div>
);

export default Index;
