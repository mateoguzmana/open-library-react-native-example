import React from 'react'
import FastImage from 'react-native-fast-image'
import styled, { useTheme } from 'styled-components/native'
import { useUpdateWishlist } from '../services/wishlist.service'

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

const Icon = styled(FastImage)`
  width: 20px;
  height: 20px;
`

interface BookActionProps {
  position?: 'top' | 'bottom'
  itemId: string
  isInWishlist: boolean
}

const BookActions: React.FC<BookActionProps> = ({ position = 'top', itemId, isInWishlist }) => {
  const theme = useTheme()
  const verticalPosition = position === 'top' ? { top: theme.spacing.medium } : { bottom: theme.spacing.medium }
  const updateWishlist = useUpdateWishlist()
  const onPressWishlistButton = () => updateWishlist.mutate(itemId)
  const wishlistIconColor = isInWishlist ? theme.iconColor.wishlist : theme.iconColor.disabled
  console.log(isInWishlist)

  return (
    <Container style={verticalPosition}>
      <Button onPress={onPressWishlistButton}>
        <Icon source={require("../assets/images/star-icon.png")} tintColor={wishlistIconColor} />
      </Button>
      <Button>
        <Icon source={require("../assets/images/reading-icon.png")} />
      </Button>
    </Container>
  )
}

export default BookActions