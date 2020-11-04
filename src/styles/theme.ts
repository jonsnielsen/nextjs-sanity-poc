import 'styled-components'
import { DefaultTheme } from 'styled-components'

const baseUnit = 8

const theme: DefaultTheme = {
  baseUnit,
  colors: {
    primary: '#4F44CA',
    secondary: '#FFE456',
    error: '#bf0000',
    surface: '#F7F8F9',
    background: '#FFFFFF',
    onPrimary: '#FAFAFA',
    onSecondary: '#000',
    onSurface: '#000',
    onBackground: '#000', 
  },
  font: {
    text: {
      fontFamily: `'Canela-Regular', serif`,
      fontSize: {
        h1: `${baseUnit * 9.5}px`,
        h2: `${baseUnit * 5.5}px`,
        h3: `${baseUnit * 4.25}px`,
        h4: `${baseUnit * 3.5}px`,
        body1: `${baseUnit * 2.25}px`,
        button: `${baseUnit * 2.25}px`,
        buttonCTA: `${baseUnit * 2.5}px`,
      },
      lineHeight: {
        h1: `${baseUnit * 9.5}px`,
        h2: `${baseUnit * 5.5}px`,
        h3: `${baseUnit * 4.25}px`,
        h4: `${baseUnit * 3.5}px`,
        body1: `${baseUnit * 2.25}px`,
        button: `${baseUnit * 2.25}px`,
        buttonCTA: `${baseUnit * 2.5}px`,
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 600,
      },
    },
  },
  screens: {
    sm: 745,
  },
  spacing: {
    1: baseUnit * 0.5,
    2: baseUnit,
    3: baseUnit * 1.5,
    4: baseUnit * 2,
    5: baseUnit * 3,
    6: baseUnit * 4,
    7: baseUnit * 6,
    8: baseUnit * 8,
    9: baseUnit * 12,
    10: baseUnit * 16,
    11: baseUnit * 24,
    12: baseUnit * 32,
    13: baseUnit * 48,
    14: baseUnit * 64,
    15: baseUnit * 80,
    16: baseUnit * 96,
  },
  animation: {
    exitDuration: 1,
    enterDuration: 1,
  }
}

export default theme
