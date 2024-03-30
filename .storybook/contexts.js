import ThemeProvider from '@themes/ThemeProvider'
import { themeMap } from '@themes'

export default [
  {
    icon: 'paintbrush',
    title: 'Change the theme',
    components: [ThemeProvider],
    params: Object.keys(themeMap).map(themeName => {
      return {
        name: themeMap[themeName].label,
        props: { themeName },
        default: themeMap[themeName].default(),
      }
    }),
  },
]
