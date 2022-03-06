import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getUpdatedList } from '../utils/list.util'

export enum List {
  Wishlist = '@wishlist',
  ReadingGroups = '@readingGroups'
}

export const useGetList = (listKey: List) => {
  return useQuery<string[] | null, Error>(
    listKey,
    async () => {
      const result: string | null = await AsyncStorage.getItem(listKey)

      return result ? JSON.parse(result) : []
    }
  )
}

export const useUpdatelist = (listKey: List) => {
  const queryClient = useQueryClient()

  return useMutation(
    listKey,
    async (itemId: string) => {
      const result: string | null = await AsyncStorage.getItem(listKey)

      const currentList = result ? JSON.parse(result) : []
      const newList = getUpdatedList(currentList, itemId)

      await AsyncStorage.setItem(listKey, JSON.stringify(newList))

      return newList
    },
    {
      onSuccess: () => queryClient.invalidateQueries(listKey),
    }
  )
}
