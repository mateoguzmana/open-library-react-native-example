import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { List, useGetList } from '../services/list.service'
import { Doc } from '../services/search.service'
import Book from './Book'

interface BooksListProps {
  books?: Doc[]
}

const PAGE_SIZE = 10
const getKeyExtractor = (book: Doc) => `${book.key}`

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  const [page, setPage] = useState(1)
  const [itemsOnList, setItemsOnList] = useState<Doc[] | []>([])
  const { data: getWishlistData } = useGetList(List.Wishlist)
  const { data: getReadingGroups } = useGetList(List.ReadingGroups)

  useEffect(() => {
    if (!!books?.length) {
      setItemsOnList(books.slice(0, PAGE_SIZE))
    }
  }, [books]);

  const onEndReached = () => {
    if (!!books?.length) {
      const newPage = page + 1
      setPage(newPage)
      setItemsOnList(books.slice(0, newPage * PAGE_SIZE))
    }
  }

  const renderItem: ListRenderItem<Doc> = ({ item: book }) => (
    <Book
      book={book}
      key={book.key}
      isInWishlist={getWishlistData?.includes(book.key) ?? false}
      isInReadingGroups={getReadingGroups?.includes(book.key) ?? false}
    />
  )

  return (
    <FlatList
      data={itemsOnList}
      keyExtractor={getKeyExtractor}
      renderItem={renderItem}
      onEndReached={onEndReached}
    />
  )
}

export default BooksList
