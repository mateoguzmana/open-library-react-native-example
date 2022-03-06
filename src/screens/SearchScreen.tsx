import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import styled from 'styled-components/native'
import { RootStackParamList } from '../navigators/MainNavigator'
import SearchInput from '../components/SearchInput'
import { Doc, useSearch } from '../services/search.service'
import ErrorMessage from '../components/ErrorMessage'
import BooksList from '../components/BooksList'

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true)
  const { isLoading, isFetching, error, data, refetch: executeSearch } = useSearch(searchTerm)

  const onSearch = () => {
    if (searchTerm.length > 0) {
      isFirstSearch && setIsFirstSearch(false)
      executeSearch()
    }
  }

  const onChangeText = (term: string) => setSearchTerm(term)

  const results = (data?.docs?.length ?? 0) > 0
  const loading = isLoading || isFetching
  const justifyContent = results || loading || error ? 'flex-start' : 'center'

  const renderContent = () => {
    if (error) return <ErrorMessage />

    if (!results && !loading && !error && !isFirstSearch) return <ErrorMessage message='No results found' />

    if (results) return <BooksList books={data?.docs} />
  }

  return (
    <StyledSafeAreaView style={{ justifyContent }}>
      <SearchInput
        placeholder='What are you reading today?'
        onChangeText={onChangeText}
        onSearch={onSearch}
        displayLoader={isLoading || isFetching}
        disabled={searchTerm.length === 0}
      />
      {renderContent()}
    </StyledSafeAreaView>
  )
}

export default SearchScreen