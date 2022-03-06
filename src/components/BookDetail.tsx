import React from 'react'
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'
import { Doc } from '../services/search.service'
import { BookCoverSize, getBookCoverUrl } from '../utils/book.util'

const BookImageContainer = styled.View`
  padding-bottom: 0;
  align-items: center;
  justify-content: center;
`

const BookImage = styled(FastImage)`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').width * 0.5}px;
`

const ContentColumn = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: ${(props) => props.theme.spacing.large}px;
  margin-top: ${(props) => props.theme.spacing.medium}px;
`

const ContentRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`

interface BookDetailProps {
  book: Doc
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => (
  <>
    <BookImageContainer>
      <BookImage source={getBookCoverUrl(book.isbn, BookCoverSize.large)} />
    </BookImageContainer>
    <ContentColumn>
      <ContentTitle>{book.title_suggest}</ContentTitle>
      <ContentRow>
        <ContentLabel>{book.author_name}</ContentLabel>
        <ContentLabel>{book.first_publish_year}</ContentLabel>
      </ContentRow>
    </ContentColumn>
  </>
)

export default BookDetail