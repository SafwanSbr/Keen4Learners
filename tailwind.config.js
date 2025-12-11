/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Color Palette - Refined from original theme
        primary: {
          DEFAULT: '#2563eb',      // Primary blue for buttons, links
          dark: '#1e40af',         // Darker blue for hover states
          light: '#3b82f6',        // Lighter blue for active states
        },
        secondary: {
          DEFAULT: '#10b981',      // Emerald green for success/active
          dark: '#059669',         // Darker green for hover
          light: '#34d399',        // Lighter green
        },
        accent: {
          DEFAULT: '#8b5cf6',       // Violet for highlights
          light: '#a78bfa',
        },
        background: {
          DEFAULT: '#f8fafc',      // Clean slate background (was #f2f4f8)
          surface: '#ffffff',      // White for cards/forms
          muted: '#f1f5f9',       // Slightly darker for subtle backgrounds
        },
        text: {
          primary: '#0f172a',      // Dark slate for main text (was #002333)
          secondary: '#64748b',    // Medium slate for secondary text
          muted: '#94a3b8',        // Light slate for muted text
          inverse: '#ffffff',      // White text for dark backgrounds
        },
        border: {
          DEFAULT: '#e2e8f0',     // Subtle borders
          light: '#f1f5f9',       // Very light borders
          dark: '#cbd5e1',        // Darker borders
        },
        error: {
          DEFAULT: '#ef4444',      // Red for errors (was #ffc0c7)
          light: '#fee2e2',        // Light red background
        },
        warning: {
          DEFAULT: '#f59e0b',     // Amber for warnings
          light: '#fef3c7',
        },
        success: {
          DEFAULT: '#10b981',      // Emerald for success
          light: '#d1fae5',        // Light green background
        },
        // Legacy support (keeping for backward compatibility)
        bodyBackground: '#f8fafc',
        successGreen: '#10b981',
        dangerRed: '#ef4444',
        questionBG: '#f1f5f9',
        fontPrimary: '#0f172a',
        active: '#10b981',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

