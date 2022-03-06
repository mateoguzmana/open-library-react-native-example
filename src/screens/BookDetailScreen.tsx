import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import styled from 'styled-components/native'
import { RootStackParamList } from '../navigators/MainNavigator'
import BookDetail from '../components/BookDetail'
import BookActions from '../components/BookActions'
import { useGetWishlist } from '../services/wishlist.service'

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`

type BookDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>

const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ route }) => {
  const { book } = route.params
  const { data } = useGetWishlist()
  const isInWishlist = data?.includes(book.key) ?? false

  return (
    <StyledSafeAreaView>
      <BookDetail book={book} />
      <BookActions itemId={book.key} isInWishlist={isInWishlist} />
    </StyledSafeAreaView>
  )
}

export default BookDetailScreen