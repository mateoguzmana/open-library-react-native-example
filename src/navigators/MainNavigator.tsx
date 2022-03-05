import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import { Doc } from '../services/search.service'
import BookDetailScreen from '../screens/BookDetailScreen'

export type RootStackParamList = {
  Search: undefined,
  BookDetail: { book: Doc },
}

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={SearchScreen}
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