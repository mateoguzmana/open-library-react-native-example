import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    borderColor: string
    cardColor: string
    fontColor: {
      body: string
      title: string
      card: string
    }
    borderRadius: number
    spacing: {
      small: number
      medium: number
      large: number
    }
    fontSizes: {
      body: number
      title: number
      card: number
    }
  }
}