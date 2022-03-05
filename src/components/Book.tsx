import React from 'react'
import styled from 'styled-components/native'
import { Doc } from '../services/search.service'
import { getBookCoverUrl } from '../utils/book.util'

const BookContaner = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
`

const BookImageContainer = styled.View`
  padding: ${(props) => props.theme.spacing.small}px;
`

const BookImage = styled.Image`
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

interface BookProps extends Doc {
  onPress: () => void
}

const Book: React.FC<BookProps> = ({ onPress, ...props }) => (
  <BookContaner onPress={onPress}>
    <BookImageContainer>
      <BookImage source={getBookCoverUrl(props.isbn)} />
    </BookImageContainer>
    <ContentColumn>
      <ContentTitle>{props.title_suggest}</ContentTitle>
      <ContentLabel>{props.author_name}</ContentLabel>
      <ContentLabel>{props.first_publish_year}</ContentLabel>
    </ContentColumn>
  </BookContaner>
)

export default Book