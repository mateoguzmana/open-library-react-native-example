import React from 'react'
import { ActivityIndicator, TextInput, TextInputProps } from 'react-native'
import FastImage from 'react-native-fast-image'
import styled, { useTheme } from 'styled-components/native'

const SearchInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${(props) => props.theme.borderColor};
  border-width: 1px;
  border-radius: ${(props) => props.theme.borderRadius / 2}px;
  margin: ${({ theme: { spacing } }) => `0 ${spacing.large}px ${spacing.medium}px`};
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

const Icon = styled(FastImage)`
  width: 20px;
  height: 20px;
  tint-color: ${(props) => props.theme.fontColor.body};
`

interface SearchInputProps extends TextInputProps {
  onSearch: () => void
  displayLoader?: boolean
  disabled?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  displayLoader,
  disabled,
  ...props
}) => {
  const theme = useTheme()
  const iconColor = disabled ? theme.fontColor.disabled : theme.fontColor.body

  const renderIcon = () =>
    displayLoader ? (
      <ActivityIndicator />
    ) : (
      <Icon
        source={require('../assets/images/search-icon.png')}
        style={{ tintColor: iconColor }}
      />
    )

  return (
    <SearchInputContainer>
      <Input {...props} placeholderTextColor={theme.fontColor.body} onSubmitEditing={onSearch} />
      <IconContainer onPress={onSearch} disabled={disabled}>
        {renderIcon()}
      </IconContainer>
    </SearchInputContainer>
  )
}

export default SearchInput