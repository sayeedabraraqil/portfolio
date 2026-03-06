import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#06b6d4',
        neon: '#10b981',
        surface: 'rgba(255,255,255,0.03)',
        glass: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #6366f1, 0 0 10px #6366f1' },
          '50%': { boxShadow: '0 0 20px #6366f1, 0 0 40px #6366f1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4, #6366f1)',
        'gradient-full': 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
      },
      boxShadow: {
        'neon-primary': '0 0 20px rgba(99, 102, 241, 0.5)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config
