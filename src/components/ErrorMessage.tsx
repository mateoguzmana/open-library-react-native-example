
   
import React from 'react'
import styled from 'styled-components/native'

const ErrorMesageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`

const ErrorMessageText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title}px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor.title};
`

interface ErrorMessageProps {
  message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong, please try again later'
}) => (
  <ErrorMesageContainer>
    <ErrorMessageText>{message}</ErrorMessageText>
  </ErrorMesageContainer>
)

export default ErrorMessage