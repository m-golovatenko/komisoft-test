import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,js,tsx}',
    './src/**/**/*.{html,js,tsx}',
    './src/**/**/**/*.{html,js,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      width: {
        '24px': '24px',
        '440px': '440px'
      },
      height: {
        '24px': '24px'
      },
      container: {
        center: true,
        padding: {
          '80px': '80px',
          '16px': '16px',
          '2px': '2px',
          '12px': '12px',
          '24px': '24px'
        }
      },

      colors: {
        blue: '#3B82F6',
        light: '#F9FAFB',
        grey: '#D8DEE4',
        dark: '#111827',
        black: '#1F2937'
      }
    }
  },
  plugins: []
} satisfies Config;
