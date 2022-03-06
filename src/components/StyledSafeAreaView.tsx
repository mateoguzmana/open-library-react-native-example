import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`
