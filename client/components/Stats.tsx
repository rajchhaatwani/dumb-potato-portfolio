import React, { useEffect, useState } from "react";

interface StatItemProps {
  value: number;   // now number instead of string
  label: string;
  duration?: number; // animation duration in ms
  sign?: string;
}

const StatItem = ({ sign = "+", value, label, duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <li className="flex-1 min-w-[140px] text-center">
      <div className="inline-flex items-baseline gap-1">
        <strong className="text-4xl md:text-5xl font-extrabold leading-none text-foreground">
          {count}
        </strong>
        <span className="text-4xl md:text-5xl font-extrabold leading-none text-orange-500">
          {sign}
        </span>
      </div>
      <p className="mt-2 text-base md:text-lg text-muted-foreground">{label}</p>
    </li>
  );
};

const Stats = () => {
  return (
    <div className="w-full">
      <ul className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatItem value={2} label="Years in business" />
        <StatItem value={5} label="Clients" />
        <StatItem sign={"%"} value={95} label="Client retention" />
        <StatItem value={11} label="Projects delivered" />
      </ul>
    </div>
  );
};

export default Stats;
