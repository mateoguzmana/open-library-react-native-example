import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import styled from 'styled-components/native'
import { RootStackParamList } from '../navigators/MainNavigator'

const StyledSafeAreaView = styled(SafeAreaView)`
  z-index: 1;
`

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <>
      <StyledSafeAreaView />
    </>
  )
}

export default HomeScreen