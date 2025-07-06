export default {
  content: [
    './index.html',
    './index.css',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian background
        bg: '#121212',              // Main background
        bgLight: '#1a1a1a',         // Section background
        bgLighter: '#1f1f1f',       // Cards / raised sections

        // Text colors
        textMain: '#f0f0f0',        // Primary text
        textSub: '#b3b3b3',         // Subtext
        textMuted: '#8c8c8c',       // Muted labels or metadata

        // Accent
        accent: '#64ffda',          // Mint green

        // Utility tones
        whiteMuted: '#d9f5f0',      // Very soft white
        borderDark: '#2a2a2a',      // Card and section dividers

        // Hover-friendly tones
        hoverAccent: '#52e0c6',     // Slightly darker mint
        hoverBg: '#1d1d1d',         // Hover for dark elements
        hoverText: '#ffffff',       // Bright hover text

        // Legacy / fallback
        white: '#e6f1ff',
        green: '#64ffda',
      },
      keyframes: {
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        'underline-left': 'underline 0.3s ease-out forwards',
      }
    }
  },
  plugins: []
};
