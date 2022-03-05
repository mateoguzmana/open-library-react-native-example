const spacing = {
  small: 4,
  medium: 8,
  large: 16,
}
const fontSizes = {
  body: 12,
  title: 16,
  card: 22,
}
const borderRadius = spacing.medium
const shared = {
  borderRadius,
  spacing,
  fontSizes,
}
const colors = {
  white: '#FFFFFF',
  black: '#08090F',
}

export const theme = {
  background: colors.white,
  borderColor: 'rgba(0, 0, 0, 0.3)',
  cardColor: colors.black,
  fontColor: {
    body: colors.black,
    title: colors.black,
    card: colors.white,
  },
  ...shared,
}