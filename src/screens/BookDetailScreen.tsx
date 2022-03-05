import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import styled from 'styled-components/native'
import { RootStackParamList } from '../navigators/MainNavigator'
import BookDetail from '../components/BookDetail'

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`

type BookDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'BookDetail'>

const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ route }) => {
  const { book } = route.params

  return (
    <StyledSafeAreaView>
      <BookDetail book={book} />
    </StyledSafeAreaView>
  )
}

export default BookDetailScreen