import { PaletteOptions, Theme, ThemeOptions, createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import { generateTypography } from './common/typography'
import { generateShadows, generateCustomShadows } from './common/shadows'
import table from './common/table'

const palette = generatePalette({
  primary: {
    lighter: '#86adff',
    light: '#507ed1',
    main: '#00529f',
    dark: '#002b70',
    darker: '#000044',
    contrastText: '#fff',
    rgba: 'rgba(0, 82, 159, 1)'
  },
  secondary: {
    lighter: '#99bffb',
    light: '#669ff9',
    main: '#337FF7',
    dark: '#0859d7',
    darker: '#063a8d',
    contrastText: '#fff',
    rgba: 'rgba(51, 127, 247, 1)'
  },
  background: {
    default: '#efeff8',
    paper: '#fff'
  },
  sideMenu: {
    bgColor: '#fff',
    color: '#00529f',
    hoverBgColor: '#DFF2FD',
    hoverTextColor: '#00529f',
    bgOpacity: '1',
    activeBgColor: '#00529f'
  }
} as PaletteOptions)

const lightBlueTheme: Theme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography: generateTypography(palette),
  table,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
} as ThemeOptions)

lightBlueTheme.components = componentsOverride(lightBlueTheme)

export default lightBlueTheme
