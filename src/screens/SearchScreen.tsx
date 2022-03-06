import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigators/MainNavigator'
import SearchInput from '../components/SearchInput'
import { useSearch } from '../services/search.service'
import ErrorMessage from '../components/ErrorMessage'
import BooksList from '../components/BooksList'
import { StyledSafeAreaView } from '../components/StyledSafeAreaView'

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

  const hasResults = (data?.docs?.length ?? 0) > 0
  const loading = isLoading || isFetching
  const justifyContent = hasResults || loading || error ? 'flex-start' : 'center'

  const renderContent = () => {
    if (error) return <ErrorMessage />

    if (!hasResults && !loading && !error && !isFirstSearch) return <ErrorMessage message='No results found' />

    if (hasResults) return <BooksList books={data?.docs} />
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