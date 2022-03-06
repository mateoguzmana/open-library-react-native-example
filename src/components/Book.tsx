import React from 'react'
import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'
import { Doc } from '../services/search.service'
import { getBookCoverUrl } from '../utils/book.util'
import BookActions from './BookActions'

const BookContaner = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
`

const BookImageContainer = styled.View`
  padding: ${(props) => props.theme.spacing.small}px;
`

const BookImage = styled(FastImage)`
  width: 70px;
  height: 70px;
`

const ContentColumn = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.spacing.small}px;
`

const ContentTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title}px;
  color: ${(props) => props.theme.fontColor.title};
  font-weight: bold;
  max-width: 90%;
`

const ContentLabel = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body}px;
  color: ${(props) => props.theme.fontColor.body};
`

interface BookProps {
  onPress: () => void
  book: Doc
  isInWishlist: boolean
}

const Book: React.FC<BookProps> = ({ book, onPress, isInWishlist }) => {
  console.log({ isInWishlist })
  return (
  <BookContaner onPress={onPress}>
    <BookImageContainer>
      <BookImage source={getBookCoverUrl(book.isbn)} />
    </BookImageContainer>
    <ContentColumn>
      <ContentTitle>{book.title_suggest}</ContentTitle>
      <ContentLabel>{book.author_name}</ContentLabel>
      <ContentLabel>{book.first_publish_year}</ContentLabel>
    </ContentColumn>
    <BookActions position='bottom' itemId={book.key} isInWishlist={isInWishlist} />
  </BookContaner>
)}

export default Book