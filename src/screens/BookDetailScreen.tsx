import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigators/MainNavigator'
import BookDetail from '../components/BookDetail'
import BookActions from '../components/BookActions'
import { List, useGetList } from '../services/list.service'

type BookDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>

const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ route }) => {
  const { book } = route.params
  const { data: getWishlistData } = useGetList(List.Wishlist)
  const { data: getReadingGroupsData } = useGetList(List.ReadingGroups)

  const isInWishlist = getWishlistData?.includes(book.key) ?? false
  const isInReadingGroups = getReadingGroupsData?.includes(book.key) ?? false

  return (
    <>
      <BookDetail book={book} />
      <BookActions
        itemId={book.key}
        isInWishlist={isInWishlist}
        isInReadingGroups={isInReadingGroups}
      />
    </>
  )
}

export default BookDetailScreen