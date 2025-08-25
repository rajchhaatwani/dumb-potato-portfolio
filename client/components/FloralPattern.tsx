import React from 'react';

interface FloralPatternProps {
  className?: string;
  opacity?: number;
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
}

const FloralPattern = ({ 
  className = '', 
  opacity = 0.1, 
  size = 'md',
  position = 'top-right'
}: FloralPatternProps) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {/* Floral SVG Pattern */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Larger central flower */}
        <g transform="translate(100,100)">
          {/* Petals */}
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(0)" opacity="0.6" />
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(45)" opacity="0.5" />
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(90)" opacity="0.6" />
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(135)" opacity="0.5" />
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(180)" opacity="0.6" />
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(225)" opacity="0.5" />
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(270)" opacity="0.6" />
          <ellipse cx="0" cy="-25" rx="8" ry="20" fill="#F76F53" transform="rotate(315)" opacity="0.5" />
          {/* Center */}
          <circle cx="0" cy="0" r="6" fill="#2E2E2E" opacity="0.8" />
        </g>

        {/* Smaller decorative flowers */}
        <g transform="translate(50,50)">
          <ellipse cx="0" cy="-15" rx="5" ry="12" fill="#D1CFC0" transform="rotate(0)" opacity="0.7" />
          <ellipse cx="0" cy="-15" rx="5" ry="12" fill="#D1CFC0" transform="rotate(60)" opacity="0.6" />
          <ellipse cx="0" cy="-15" rx="5" ry="12" fill="#D1CFC0" transform="rotate(120)" opacity="0.7" />
          <ellipse cx="0" cy="-15" rx="5" ry="12" fill="#D1CFC0" transform="rotate(180)" opacity="0.6" />
          <ellipse cx="0" cy="-15" rx="5" ry="12" fill="#D1CFC0" transform="rotate(240)" opacity="0.7" />
          <ellipse cx="0" cy="-15" rx="5" ry="12" fill="#D1CFC0" transform="rotate(300)" opacity="0.6" />
          <circle cx="0" cy="0" r="3" fill="#2E2E2E" opacity="0.6" />
        </g>

        <g transform="translate(150,150)">
          <ellipse cx="0" cy="-12" rx="4" ry="10" fill="#F76F53" transform="rotate(30)" opacity="0.5" />
          <ellipse cx="0" cy="-12" rx="4" ry="10" fill="#F76F53" transform="rotate(90)" opacity="0.6" />
          <ellipse cx="0" cy="-12" rx="4" ry="10" fill="#F76F53" transform="rotate(150)" opacity="0.5" />
          <ellipse cx="0" cy="-12" rx="4" ry="10" fill="#F76F53" transform="rotate(210)" opacity="0.6" />
          <ellipse cx="0" cy="-12" rx="4" ry="10" fill="#F76F53" transform="rotate(270)" opacity="0.5" />
          <ellipse cx="0" cy="-12" rx="4" ry="10" fill="#F76F53" transform="rotate(330)" opacity="0.6" />
          <circle cx="0" cy="0" r="2" fill="#2E2E2E" opacity="0.7" />
        </g>

        {/* Leaves and stems */}
        <path 
          d="M 30 170 Q 40 160 50 150 Q 45 145 40 150 Q 35 155 30 160 Z" 
          fill="#8B8680" 
          opacity="0.4"
        />
        <path 
          d="M 170 30 Q 160 40 150 50 Q 155 45 160 40 Q 165 35 170 30 Z" 
          fill="#8B8680" 
          opacity="0.4"
        />
        <path 
          d="M 70 180 Q 80 170 90 160 Q 85 155 80 160 Q 75 165 70 170 Z" 
          fill="#8B8680" 
          opacity="0.3"
        />

        {/* Additional decorative dots */}
        <circle cx="25" cy="25" r="2" fill="#F76F53" opacity="0.3" />
        <circle cx="175" cy="175" r="1.5" fill="#D1CFC0" opacity="0.4" />
        <circle cx="180" cy="20" r="1" fill="#F76F53" opacity="0.5" />
        <circle cx="20" cy="180" r="2.5" fill="#D1CFC0" opacity="0.3" />
      </svg>
    </div>
  );
};

export default FloralPattern;
