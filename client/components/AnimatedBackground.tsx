import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  type?: "dots" | "waves" | "pulse" | "glow";
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

const AnimatedBackground = ({ 
  type = "dots", 
  className = "",
  speed = "normal" 
}: AnimatedBackgroundProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-full h-full bg-muted/10 rounded-lg ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-foreground/30 text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  const getAnimationClass = () => {
    const speedClass = {
      slow: "animate-pulse",
      normal: "animate-pulse",
      fast: "animate-ping"
    }[speed];

    return speedClass;
  };

  const renderDots = () => (
    <div className="relative w-full h-full overflow-hidden">
      <div className={`absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full ${getAnimationClass()}`} style={{animationDelay: "0s"}} />
      <div className={`absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full ${getAnimationClass()}`} style={{animationDelay: "1s"}} />
      <div className={`absolute bottom-1/3 left-1/3 w-5 h-5 bg-indigo-500/30 rounded-full ${getAnimationClass()}`} style={{animationDelay: "2s"}} />
      <div className={`absolute bottom-1/4 right-1/3 w-2 h-2 bg-cyan-500/30 rounded-full ${getAnimationClass()}`} style={{animationDelay: "0.5s"}} />
    </div>
  );

  const renderWaves = () => (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        <svg viewBox="0 0 400 200" className="w-full h-full opacity-30">
          <path
            d="M0,100 Q100,50 200,100 T400,100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-blue-500"
          >
            <animate
              attributeName="d"
              values="M0,100 Q100,50 200,100 T400,100;M0,100 Q100,150 200,100 T400,100;M0,100 Q100,50 200,100 T400,100"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );

  const renderPulse = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className={`w-20 h-20 bg-blue-500/20 rounded-full ${getAnimationClass()}`} />
      <div className={`absolute w-16 h-16 bg-purple-500/20 rounded-full ${getAnimationClass()}`} style={{animationDelay: "0.5s"}} />
      <div className={`absolute w-12 h-12 bg-indigo-500/20 rounded-full ${getAnimationClass()}`} style={{animationDelay: "1s"}} />
    </div>
  );

  const renderGlow = () => (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: "1s"}} />
    </div>
  );

  const renderAnimation = () => {
    switch (type) {
      case "dots":
        return renderDots();
      case "waves":
        return renderWaves();
      case "pulse":
        return renderPulse();
      case "glow":
        return renderGlow();
      default:
        return renderDots();
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      {renderAnimation()}
    </div>
  );
};

export default AnimatedBackground;
