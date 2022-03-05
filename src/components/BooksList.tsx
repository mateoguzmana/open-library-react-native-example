import React, { useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { Doc } from '../services/search.service'
import Book from './Book'

interface BooksListProps {
  books?: Doc[]
  onPress: (book: Doc, index: number) => void
}

const PAGE_SIZE = 10
const getKeyExtractor = (book: Doc) => `${book.key}`

const BooksList: React.FC<BooksListProps> = ({ books, onPress }) => {
  const [page, setPage] = useState(1)
  const [itemsOnList, setItemsOnList] = useState(books?.slice(0, PAGE_SIZE))

  const onEndReached = () => {
    const newPage = page + 1
    setPage(newPage)
    setItemsOnList(books?.slice(0, newPage * PAGE_SIZE))
  }

  const renderItem: ListRenderItem<Doc> = ({ item: book, index }) =>
    <Book {...book} key={book.cover_edition_key} onPress={() => onPress(book, index)} />

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