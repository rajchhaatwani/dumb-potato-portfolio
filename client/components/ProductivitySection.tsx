import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 1. Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type FeatureCardProps = {
  title: string;
  description: string;
  isActive: boolean;
};

// 2. Define the data for our feature cards
const features = [
  {
    title: "Workspaces",
    description:
      "Organize your projects into Workspaces to keep your work separate and organized, and switch between them with ease.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Compact Mode",
    description:
      "Our Compact Mode gives you more screen real estate by hiding unnecessary elements when you don't need them.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Glance",
    description:
      "Glance allows you to quickly switch between your most used projects, without having to scroll through your history.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Split View",
    description:
      "Split View allows you to view two projects side by side, making it easier to compare and switch between them.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// 3. Create a reusable FeatureCard component that can be highlighted
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, description, isActive }, ref) => (
    <div
      ref={ref} // Now TypeScript knows this ref is for an HTMLDivElement
      className={`p-6 rounded-lg border transition-all duration-300 ${
        isActive
          ? "bg-gray-800 border-blue-500 opacity-100 scale-105"
          : "bg-gray-900 border-gray-700 opacity-50"
      }`}
    >
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
);

// 4. The main component with the GSAP animation logic
export const ProductivitySection = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  
  const mainRef = useRef(null);
  const cardsRef = useRef([]);

  // Refs for the elements we want to animate
  const imageRef = useRef(null);
  const imageBeforeRef = useRef(null);
  const imageAfterRef = useRef(null);
  
  // A helper function to collect refs for each card
  const addToCardRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    // Reset the cards ref array on each render before populating it
    cardsRef.current = [];

    // Use GSAP Context for safe cleanup
    const ctx = gsap.context(() => {
      // The main timeline that pins the whole section
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          pin: true,
          start: "top top",
          // Define a scroll duration for the pin based on the number of features
          end: `+=${features.length * 100}%`,
          scrub: 1, // Smoothly links animation to scroll
        },
      });

      // Add the image scaling animation to the main pin timeline
      // This animation will play out over the entire pinned duration
      pinTimeline
        .to(imageRef.current, { width: "100%", ease: "power1.inOut" }, 0)
        .to(imageBeforeRef.current, { width: "0%", ease: "power1.inOut" }, 0)
        .to(imageAfterRef.current, { width: "0%", ease: "power1.inOut" }, 0);

      // Create a separate ScrollTrigger for each feature card
      // This will handle changing the active state and the background image
      features.forEach((feature, index) => {
        ScrollTrigger.create({
          trigger: cardsRef.current[index],
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            setActiveFeatureIndex(index);
            gsap.to(imageRef.current, {
              backgroundImage: `url(${feature.image})`,
              duration: 0.3,
            });
          },
          onEnterBack: () => {
            setActiveFeatureIndex(index);
            gsap.to(imageRef.current, {
              backgroundImage: `url(${feature.image})`,
              duration: 0.3,
            });
          },
        });
      });
    }, mainRef); // Scope the context to our main component

    // Cleanup function to revert all GSAP animations and ScrollTriggers
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-4xl text-white">Scroll Down to Start</h1></div>
      
      <section ref={mainRef} className="relative bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 min-h-screen">
            
            {/* Left Panel: Sticky Content */}
            <div className="flex flex-col justify-center py-12 h-screen">
              <h2 className="font-bold text-5xl lg:text-6xl mb-6">
                Productivity at its best
              </h2>
              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-lg">
                We are packed with features that help you stay productive and
                focused. Solutions should be tools that help you get things
                done, not distractions.
              </p>

              {/* Scrollable Feature Cards Container */}
              <div className="space-y-4 pr-4 -mr-4 overflow-y-auto custom-scrollbar">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    ref={addToCardRefs}
                    title={feature.title}
                    description={feature.description}
                    isActive={activeFeatureIndex === index}
                  />
                ))}
              </div>
            </div>

            {/* Right Panel: Animated Visuals */}
            <div className="relative flex items-center justify-center">
                <div className="w-full flex items-stretch justify-center">
                    <div ref={imageBeforeRef} className="relative block w-1/4 h-auto">
                        <div 
                            className="absolute top-1/2 -translate-y-1/2 right-0 h-4/5 w-full bg-cover bg-center rounded-l-lg"
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
                        ></div>
                    </div>
                    <div 
                        ref={imageRef} 
                        className="relative overflow-hidden aspect-video w-1/2 mx-4 bg-cover bg-center rounded-lg shadow-2xl"
                        style={{ backgroundImage: `url(${features[0].image})` }}
                    >
                    </div>
                     <div ref={imageAfterRef} className="relative block w-1/4 h-auto">
                        <div 
                            className="absolute top-1/2 -translate-y-1/2 left-0 h-4/5 w-full bg-cover bg-center rounded-r-lg"
                            style={{ backgroundImage: `url(https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
                        ></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-4xl text-white">After Section</h1></div>
    </>
  );
};