import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';
import FloralPattern from '@/components/FloralPattern';
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
      
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <FloralPattern position="top-right" size="lg" opacity={0.08} />
          <FloralPattern position="bottom-left" size="md" opacity={0.06} />
          <div className="container mx-auto text-center relative z-10">
            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="font-judson text-6xl md:text-8xl lg:text-9xl leading-none mb-4">
                <span className="text-foreground">welcome to</span>
              </h1>
              <h1 className="font-judson text-6xl md:text-8xl lg:text-9xl leading-none">
                <span className="text-foreground">a </span>
                <span className="text-orange-500 italic">calmer</span>
                <span className="text-foreground"> internet</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="mb-12 space-y-2">
              <p className="font-bricolage text-base text-muted-foreground max-w-md mx-auto">
                Beautifully designed, privacy-focused, and packed with features.
              </p>
              <p className="font-bricolage text-base text-muted-foreground max-w-md mx-auto">
                We care about your experience, not your data.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="flex items-center gap-3 px-8 py-4 bg-secondary rounded-xl font-bricolage text-sm text-secondary-foreground hover:bg-muted transition-colors duration-200 shadow-lg"
              >
                Start Your Journey with us
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 px-6 py-4 border border-border bg-muted/50 backdrop-blur-sm rounded-xl font-bricolage text-sm text-foreground hover:bg-muted/70 transition-colors duration-200"
              >
                know us ❤
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 opacity-80">
              <Github className="w-4 h-4 text-muted-foreground" />
              <Twitter className="w-4 h-4 text-muted-foreground" />
              {/* Mastodon */}
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
              </svg>
              <Star className="w-4 h-4 text-muted-foreground" />
              {/* Discord */}
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>
            </div>
          </div>
        </section>

        {/* Large Image Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto">
            <div className="w-full h-96 bg-muted rounded-xl opacity-80 shadow-lg border border-border"></div>
          </div>
        </section>

        {/* Productivity Section */}
        <section className="relative px-4 mb-20 overflow-hidden">
          <FloralPattern position="top-left" size="md" opacity={0.05} />
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div>
                <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Productivity at its best
                </h2>
                <p className="font-bricolage text-base text-muted-foreground mb-8 leading-relaxed">
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
                <div className="w-full h-80 bg-muted rounded-3xl opacity-80 shadow-lg border border-border"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="px-4 mb-20">
          <div className="container mx-auto text-center">
            <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Sponsors
            </h2>
            <div className="mb-6">
              <p className="font-bricolage text-base text-muted-foreground mb-2">
                We are grateful to our sponsors for their support. They help us to keep the project alive.
              </p>
              <p className="font-bricolage text-base text-muted-foreground">
                You can also be part of this journey by{' '}
                <span className="text-orange-500">donating us directly</span>
              </p>
            </div>
            
            {/* Sponsor Logos */}
            <div className="flex justify-center items-center gap-8 opacity-80">
              <div className="w-64 h-16 bg-muted rounded border border-border"></div>
              <div className="w-72 h-16 bg-muted rounded border border-border"></div>
              <div className="w-44 h-16 bg-muted rounded border border-border"></div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative px-4 mb-20 overflow-hidden">
          <FloralPattern position="center" size="lg" opacity={0.04} />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span>Our</span> <span>Core</span> <span>Values</span>
            </h2>
            <p className="font-bricolage text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
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
            <div className="w-full h-96 lg:h-[500px] bg-muted rounded-3xl shadow-lg border border-border"></div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="relative px-4 pb-20 overflow-hidden">
          {/* Curved Background */}
          <div className="absolute inset-x-0 bottom-0 h-96 bg-muted rounded-t-[500px] -mx-4"></div>
          <FloralPattern position="bottom-right" size="sm" opacity={0.1} />

          <div className="container mx-auto relative z-10">
            <div className="text-left max-w-lg">
              <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
                dumb potato
              </h2>
              <p className="font-bricolage text-base text-muted-foreground mb-8 leading-relaxed">
                Beautifully designed, privacy-focused, and packed with features.
                We care about your experience, not your data.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-bricolage text-sm rounded-xl hover:bg-primary/80 transition-colors duration-200 shadow-lg"
              >
                Download
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted px-4 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Follow Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">Follow Us</h3>
              <div className="flex gap-4 opacity-80">
                <Github className="w-4 h-4 text-dark-950" />
                <Twitter className="w-4 h-4 text-dark-950" />
                {/* Mastodon */}
                <svg className="w-4 h-4 text-dark-950" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
                </svg>
                <Star className="w-4 h-4 text-dark-950" />
                {/* Discord */}
                <svg className="w-4 h-4 text-dark-950" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
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
