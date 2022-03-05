import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

const Container = styled.View`
  position: absolute;
  flex-direction: row;
  right: ${({ theme }) => theme.spacing.medium}px;
`

const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.background};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  padding: ${({ theme }) => theme.spacing.small}px;
  margin: ${({ theme }) => theme.spacing.small}px;
`

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  tint-color: ${(props) => props.theme.fontColor.disabled};
`

interface BookActionProps {
  position?: 'top' | 'bottom'
}

const BookActions: React.FC<BookActionProps> = ({ position = 'top' }) => {
  const theme = useTheme()
  const verticalPosition = position === 'top' ? { top: theme.spacing.medium } : { bottom: theme.spacing.medium }
  return (
    <Container style={verticalPosition}>
      <Button>
        <Icon source={require("../assets/images/star-icon.png")} />
      </Button>
      <Button>
        <Icon source={require("../assets/images/reading-icon.png")} />
      </Button>
    </Container>
  )
}

export default BookActions