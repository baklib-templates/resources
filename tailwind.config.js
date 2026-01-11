/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './snippets/**/*.liquid',
    './statics/**/*.liquid'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: () => {
        return {
          ...["primary", "secondary", "accent", "info", "success", "warning"].reduce((map, name) => {
            return {
              ...map,
              [name]: {
                DEFAULT: `hsl(var(--theme-color-${name}) / <alpha-value>)`,
                lighten: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) calc(var(--theme-color-${name}-hsl-l) + 15%))`,
                darken: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) calc(var(--theme-color-${name}-hsl-l) - 15%))`,
                ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].reduce((map, lightness) => {
                  return {
                    ...map,
                    [lightness]: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) ${100 - lightness/10*0.8}%)`
                  }
                }, {})
              }
            }
          }, {}),
          // 错误色永远是红色，饱和度与主色调保持一致
          error: {
            DEFAULT: `hsl(355 75% var(--theme-color-primary-hsl-l) / <alpha-value>)`,
            lighten: `hsl(355 75% calc(var(--theme-color-primary-hsl-l) + 15%))`,
            darken: `hsl(355 75% calc(var(--theme-color-primary-hsl-l) - 15%))`,
            ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].reduce((map, lightness) => {
              return {
                ...map,
                [lightness]: `hsl(355 75% ${100 - lightness/10*0.8}%)`
              }
            }, {})
          }
        }
      },
    },
  },
  plugins: [],
}

