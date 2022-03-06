import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Doc } from '../services/search.service'
import { BookCoverSize } from '../utils/book.util'
import { BookCover } from './BookCover'

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`

const BookImageContainer = styled.View`
  padding-bottom: 0;
  align-items: center;
  justify-content: center;
`

const BookImage = styled(BookCover)`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').width * 0.75}px;
`

const ContentColumn = styled.View`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  margin: ${(props) => props.theme.spacing.large}px;
  margin-top: ${(props) => props.theme.spacing.medium}px;
`

const ContentTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.card}px;
  color: ${(props) => props.theme.fontColor.title};
  font-weight: bold;
  max-width: 95%;
`

const ContentLabel = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body * 1.5}px;
  color: ${(props) => props.theme.fontColor.body};
  padding-top: ${(props) => props.theme.spacing.medium}px;
  text-transform: capitalize;
`

interface BookDetailProps {
  book: Doc
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => (
  <Container>
    <BookImageContainer>
      <BookImage book={book} size={BookCoverSize.large} />
    </BookImageContainer>
    <ContentColumn>
      <ContentTitle>{book.title_suggest}</ContentTitle>
      <ContentLabel>Author: {book.author_name}</ContentLabel>
      {book?.publish_date?.[0] && (
        <ContentLabel>Publish date: {book.publish_date[0]}</ContentLabel>
      )}
      {book?.publisher?.[0] && (
        <ContentLabel>Publisher: {book.publisher[0]}</ContentLabel>
      )}
      {book?.language?.[0] && (
        <ContentLabel>Languages: {book.language.join(', ')}</ContentLabel>
      )}
      <ContentLabel>Type: {book.type}</ContentLabel>
    </ContentColumn>
  </Container>
);

export default BookDetail;
