import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './src/theme'
import MainNavigator from './src/navigators/MainNavigator'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MainNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default App
