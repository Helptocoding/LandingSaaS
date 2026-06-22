/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        page: 'hsl(40, 33%, 98%)',
        surface: '#FFFFFF',
        muted: 'hsl(150, 18%, 95%)',
        ink: {
          DEFAULT: 'hsl(165, 25%, 12%)',
          secondary: 'hsl(160, 12%, 38%)',
          tertiary: 'hsl(160, 8%, 55%)',
        },
        brand: {
          DEFAULT: 'hsl(160, 35%, 28%)',
          hover: 'hsl(160, 35%, 22%)',
          accent: 'hsl(158, 40%, 55%)',
          soft: 'hsl(150, 30%, 92%)',
        },
        accent: {
          DEFAULT: 'hsl(16, 75%, 60%)',
          foreground: '#FFFFFF',
          soft: 'hsl(22, 90%, 95%)',
        },
        line: 'hsl(150, 15%, 88%)',
        success: 'hsl(148, 50%, 42%)',
        warning: 'hsl(36, 92%, 55%)',
        destructive: 'hsl(0, 70%, 52%)',
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
