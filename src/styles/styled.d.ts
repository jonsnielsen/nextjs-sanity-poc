// import original module declarations
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    baseUnit: number
    colors: {
      primary: string
      secondary: string 
      error: string
      surface: string
      background: string
      onPrimary: string
      onSecondary: string
      onSurface: string
      onBackground: string
    }
    font: {
      text: {
        fontFamily: string
        fontSize: {
          h1: string
          h2: string
          h3: string
          h4: string
          body1: string
          button: string
          buttonCTA: string
        }
        fontWeight: {
          regular: number
          medium: number
          bold: number
        }
        lineHeight: {
          h1: string
          h2: string
          h3: string
          h4: string
          body1: string
          button: string
          buttonCTA: string
        }
      }
    }
    screens: {
      sm: number
    }
    spacing: {
      1: number
      2: number
      3: number
      4: number
      5: number
      6: number
      7: number
      8: number
      9: number
      10: number
      11: number
      12: number
      13: number
      14: number
      15: number
      16: number
    }
    animation: {
      exitDuration: number
      enterDuration: number
    }
  }
}