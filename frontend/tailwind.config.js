/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        page: 'hsl(var(--page) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        ink: {
          DEFAULT: 'hsl(var(--ink) / <alpha-value>)',
          secondary: 'hsl(var(--ink-secondary) / <alpha-value>)',
          tertiary: 'hsl(var(--ink-tertiary) / <alpha-value>)',
        },
        brand: {
          DEFAULT: 'hsl(var(--brand) / <alpha-value>)',
          hover: 'hsl(var(--brand-hover) / <alpha-value>)',
          accent: 'hsl(var(--brand-accent) / <alpha-value>)',
          soft: 'hsl(var(--brand-soft) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
          soft: 'hsl(var(--accent-soft) / <alpha-value>)',
        },
        line: 'hsl(var(--line) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter: '-0.025em',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 1px 1px rgba(0,0,0,0.03)',
        lift: '0 20px 40px -15px rgba(0,0,0,0.10)',
        glow: '0 20px 60px -20px hsl(160 35% 28% / 0.35)',
        'accent-glow': '0 12px 30px -8px hsl(16 75% 60% / 0.4)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
