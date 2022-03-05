import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import { Doc } from '../services/search.service'
import BookDetailScreen from '../screens/BookDetailScreen'

export type RootStackParamList = {
  Home: undefined,
  BookDetail: { book: Doc },
}

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BookDetail'
        component={BookDetailScreen}
        options={{ headerShown: true, title: 'Book Detail', headerBackTitle: '' }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator