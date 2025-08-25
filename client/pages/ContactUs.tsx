import { useState } from 'react';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';
import ContactModal from '@/components/ContactModal';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "info@dumbpotato.com",
      action: "mailto:info@dumbpotato.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak with our team directly",
      value: "+91-9904538757",
      action: "tel:+919904538757"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      description: "Come say hello at our office",
      value: "B-414, 11th Floor, Privilion, Isckon Cross-road, Ahmedabad - 380001",
      action: "https://maps.google.com/?q=B-414,+11th+Floor,+Privilion,+Isckon+Cross-road,+Ahmedabad+-+380001"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on your specific requirements. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer various maintenance and support packages to ensure your project continues to perform optimally after launch. This includes updates, security monitoring, and technical support."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We love collaborating with in-house teams and can integrate seamlessly into your existing workflow. We're flexible and adapt to your preferred communication and project management tools."
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch with Dumb Potato"
        description="Ready to start your project? Contact Dumb Potato for creative digital solutions. Get a free consultation and quote for your web development needs."
        keywords="contact, get quote, consultation, web development inquiry, project discussion, contact form"
        url="https://dumbpotato.com/contact"
      />
      
      <Navigation />
      
      <main className="bg-cream-50 min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-judson text-5xl md:text-7xl lg:text-8xl text-dark-950 mb-8">
                Let's <span className="text-orange-500 italic">Talk</span>
              </h1>
              <p className="font-bricolage text-xl text-dark-950 leading-relaxed max-w-3xl mx-auto mb-8">
                Ready to bring your digital vision to life? We'd love to hear about your project 
                and explore how we can help you create something beautiful and meaningful.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-cream-50 font-bricolage text-base rounded-xl hover:bg-orange-600 transition-colors duration-200 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Start a Conversation
              </button>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-cream-100/50">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <ContactMethodCard key={index} method={method} />
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours & Location */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-8">
                  Our Office
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-bricolage text-lg font-semibold text-dark-950 mb-2">
                        Office Hours
                      </h3>
                      <div className="space-y-1 font-bricolage text-dark-950">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-bricolage text-lg font-semibold text-dark-950 mb-2">
                        Location
                      </h3>
                      <p className="font-bricolage text-dark-950">
                        B-414, 11th Floor, Privilion<br />
                        Isckon Cross-road<br />
                        Ahmedabad - 380001<br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 font-bricolage text-base rounded-xl hover:bg-orange-500 hover:text-cream-50 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Quick Message
                  </button>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-96 bg-gray-300 rounded-2xl flex items-center justify-center">
                <p className="font-bricolage text-dark-950/60">Interactive Map</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-cream-100/50">
          <div className="container mx-auto">
            <h2 className="font-bricolage text-4xl font-bold text-dark-950 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl border border-cream-300/30 p-12 text-center">
              <h2 className="font-bricolage text-3xl font-bold text-dark-950 mb-4">
                Quick Response Guaranteed
              </h2>
              <p className="font-bricolage text-lg text-dark-950 mb-6 max-w-2xl mx-auto">
                We understand that timing is crucial for your business. That's why we guarantee 
                a response to all inquiries within 24 hours during business days.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">&lt; 24h</div>
                  <p className="font-bricolage text-sm text-dark-950">Email Response</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">&lt; 2h</div>
                  <p className="font-bricolage text-sm text-dark-950">Phone Response</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <p className="font-bricolage text-sm text-dark-950">Privacy Protected</p>
                </div>
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
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">Follow Us</h3>
              <div className="flex gap-4 opacity-80">
                <div className="w-4 h-4 bg-dark-950"></div>
                <div className="w-4 h-4 bg-dark-950"></div>
                <div className="w-4 h-4 bg-dark-950"></div>
              </div>
            </div>
            
            {/* About Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">About Us</h3>
              <div className="space-y-2 text-dark-900">
                <a href="#" className="block hover:text-orange-500 transition-colors">Team & Contributors</a>
                <a href="#" className="block hover:text-orange-500 transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            {/* Know Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">know us!</h3>
              <div className="space-y-2 text-dark-900">
                <a href="#" className="block hover:text-orange-500 transition-colors">Our Work</a>
                <a href="#" className="block hover:text-orange-500 transition-colors">Our way to work</a>
                <a href="#" className="block hover:text-orange-500 transition-colors">Services</a>
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

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

// Contact Method Card Component
const ContactMethodCard = ({ method }: { method: any }) => (
  <div className="p-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-cream-300/30 text-center hover:shadow-xl transition-all duration-300">
    <div className="text-orange-500 mb-4 flex justify-center">{method.icon}</div>
    <h3 className="font-bricolage text-xl font-bold text-dark-950 mb-2">{method.title}</h3>
    <p className="font-bricolage text-sm text-dark-950/80 mb-4">{method.description}</p>
    <a
      href={method.action}
      target={method.action.startsWith('http') ? '_blank' : '_self'}
      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
      className="font-bricolage text-dark-950 hover:text-orange-500 transition-colors font-medium"
    >
      {method.value}
    </a>
  </div>
);

// FAQ Item Component
const FAQItem = ({ faq }: { faq: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl border border-cream-300/30 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
      >
        <h3 className="font-bricolage text-lg font-semibold text-dark-950 pr-4">
          {faq.question}
        </h3>
        <div className={`transform transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-0.5 bg-dark-950 absolute"></div>
            <div className="w-0.5 h-4 bg-dark-950 absolute"></div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="font-bricolage text-dark-950 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
