import React from 'react'
import FastImage from 'react-native-fast-image'
import styled, { useTheme } from 'styled-components/native'
import { List, useUpdatelist } from '../services/list.service'

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
  isInReadingGroups: boolean
}

const BookActions: React.FC<BookActionProps> = ({
  position = 'top',
  itemId,
  isInWishlist,
  isInReadingGroups
}) => {
  const theme = useTheme()
  const verticalPosition = position === 'top' ? { top: theme.spacing.medium } : { bottom: theme.spacing.small }
  const updateWishlist = useUpdatelist(List.Wishlist)
  const updateReadingGroups = useUpdatelist(List.ReadingGroups)

  const onPressWishlistButton = () => updateWishlist.mutate(itemId)
  const onPressReadingGroupsButton = () => updateReadingGroups.mutate(itemId)

  const wishlistIconColor = isInWishlist ? theme.iconColor.wishlist : theme.iconColor.disabled
  const readingGroupsIconColor = isInReadingGroups ? theme.iconColor.wishlist : theme.iconColor.disabled

  return (
    <Container style={verticalPosition}>
      <Button onPress={onPressWishlistButton}>
        <Icon source={require("../assets/images/star-icon.png")} tintColor={wishlistIconColor} />
      </Button>
      <Button onPress={onPressReadingGroupsButton}>
        <Icon source={require("../assets/images/reading-icon.png")} tintColor={readingGroupsIconColor} />
      </Button>
    </Container>
  )
}

export default BookActions