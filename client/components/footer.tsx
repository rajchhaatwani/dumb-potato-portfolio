import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import FloralPattern from "./FloralPattern";
import Lottie from "lottie-react";
import potatoAnimation from "../assets/Potato.json";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/about", label: "About us" },
    { href: "/our-work", label: "Our work" },
    { href: "/services", label: "Services" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <section className="relative px-4 mt-[172px] overflow-hidden">
        {/* Curved Background */}
        {/* <div className="absolute inset-x-0 bottom-0 h-96  rounded-t-[500px] -mx-4"></div> */}

        <div className="container mx-auto relative z-10">
          <div className="text-left max-w-lg">
            <h2 className="font-bricolage text-5xl lg:text-6xl font-bold text-foreground mb-6">
              dumb potato
            </h2>
            <p className="font-bricolage text-base text-muted-foreground mb-8 leading-relaxed">
              Choose Dumb. Think Smart.
            </p>

            {/* <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-bricolage text-sm rounded-xl hover:bg-primary/80 transition-colors duration-200 shadow-lg"
            >
              Contact us
              <ArrowRight className="w-6 h-6" />
            </Link> */}
          </div>
        </div>
      </section>
      <footer className=" px-4 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Follow Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4 opacity-80">
                <a
                  href="https://www.linkedin.com/company/dumb-potato/"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4 text-dark-950" />
                </a>
                {/* <Instagram className="w-4 h-4 text-dark-950" /> */}
              </div>
            </div>

            {/* Know Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">
                know us!
              </h3>
              <div className="space-y-2 text-dark-900">
                {/* <Link
                  to="/our-work"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Our Work
                </Link>
                <Link
                  to="/our-way-to-work"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Our way to work
                </Link> */}
                <Link
                  to="/services"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="block hover:text-orange-500 transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-bricolage text-base font-semibold text-dark-900 mb-4">
                Contact us
              </h3>
              <div className="space-y-2 text-dark-900">
                <a href="mailto:info@dumbpotato.com">info@dumbpotato.com</a>
                <p>
                  <a href="tel:+919904538757">+91-9904538757</a>
                </p>

                <a className="text-sm" href="https://maps.app.goo.gl/twhgwUcZo3vZQohn7">
                  I-103, Rudra Square, Judges Bunglow Rd,
                  <br />
                  Bodakdev, Ahmedabad, Gujarat 380015.
                </a>
              </div>
            </div>

            <div className=" justify-center flex items-center md:mt-[-84px]">
              <Lottie animationData={potatoAnimation} loop autoplay />
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-dark-900/20">
            <p className="font-bricolage text-base text-dark-900">
              &copy; 2025{" "}
              <span className="text-orange-500 font-bold">dumb potato</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
