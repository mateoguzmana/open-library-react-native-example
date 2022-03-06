import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getUpdatedReadingGroups } from '../utils/reading-groups.util'

const READING_GROUPS_KEY = '@readingGroups'

export const useGetReadingGroups = () => {
  return useQuery<string[] | null, Error>(
    READING_GROUPS_KEY,
    async () => {
      const result: string | null = await AsyncStorage.getItem(READING_GROUPS_KEY)

      return result ? JSON.parse(result) : []
    }
  )
}

export const useUpdateReadingGroups = () => {
  const queryClient = useQueryClient()

  return useMutation(
    READING_GROUPS_KEY,
    async (itemId: string) => {
      const result: string | null = await AsyncStorage.getItem(READING_GROUPS_KEY)

      const currentReadingGroups = result ? JSON.parse(result) : []
      const newReadingGroups = getUpdatedReadingGroups(currentReadingGroups, itemId)

      await AsyncStorage.setItem(READING_GROUPS_KEY, JSON.stringify(newReadingGroups))

      return newReadingGroups
    },
    {
      onSuccess: () => queryClient.invalidateQueries(READING_GROUPS_KEY),
    }
  )
}
