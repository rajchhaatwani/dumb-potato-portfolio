import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'judson': ['Judson', 'serif'],
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
        'sans': ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        'serif': ['Judson', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Portfolio theme colors
        cream: {
          50: "hsl(48 43% 96%)", // #F2F0E3
          100: "hsl(48 38% 94%)",
          200: "hsl(48 33% 88%)",
          300: "hsl(48 28% 82%)", // #D1CFC0
          400: "hsl(48 23% 76%)",
          500: "hsl(48 18% 70%)",
          600: "hsl(48 13% 64%)",
          700: "hsl(48 8% 58%)",
          800: "hsl(48 3% 52%)",
          900: "hsl(48 2% 46%)",
        },
        orange: {
          50: "hsl(11 93% 94%)",
          100: "hsl(11 93% 88%)",
          200: "hsl(11 93% 82%)",
          300: "hsl(11 93% 76%)",
          400: "hsl(11 93% 70%)",
          500: "hsl(11 93% 64%)", // #F76F53
          600: "hsl(11 93% 58%)",
          700: "hsl(11 93% 52%)",
          800: "hsl(11 93% 46%)",
          900: "hsl(11 93% 40%)",
        },
        dark: {
          50: "hsl(0 0% 95%)",
          100: "hsl(0 0% 90%)",
          200: "hsl(0 0% 80%)",
          300: "hsl(0 0% 70%)",
          400: "hsl(0 0% 60%)",
          500: "hsl(0 0% 50%)",
          600: "hsl(0 0% 40%)",
          700: "hsl(0 0% 30%)",
          800: "hsl(0 0% 18%)", // #2E2E2E
          900: "hsl(0 0% 12%)", // #1F1F1F
          950: "hsl(0 0% 0%)", // #000
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
