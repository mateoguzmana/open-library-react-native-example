import React from 'react'
import { ActivityIndicator, Image, TextInput, TextInputProps } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

const SearchInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${(props) => props.theme.borderColor};
  border-width: 1px;
  border-radius: ${(props) => props.theme.borderRadius / 2}px;
  margin: 0 ${(props) => props.theme.spacing.large}px;
`

const Input = styled(TextInput)`
  flex: 1;
  padding: ${(props) => props.theme.spacing.medium}px;
  color: ${(props) => props.theme.fontColor.body};
`

const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: ${(props) => props.theme.spacing.medium}px;
`

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  tint-color: ${(props) => props.theme.fontColor.body};
`

interface SearchInputProps extends TextInputProps {
  onSearch: () => void
  displayLoader?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, displayLoader, ...props }) => {
  const theme = useTheme()

  return (
    <SearchInputContainer>
      <Input {...props} placeholderTextColor={theme.fontColor.body} onSubmitEditing={onSearch} />
      <IconContainer onPress={onSearch}>
        {displayLoader ? <ActivityIndicator /> : <Icon source={require('../assets/images/search-icon.png')} />}
      </IconContainer>
    </SearchInputContainer>
  )
}

export default SearchInput