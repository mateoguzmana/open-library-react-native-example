import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getUpdatedWishlist } from '../utils/wishlist.util'

const WISHLIST_KEY = '@wishlist'

export const useGetWishlist = () => {
  return useQuery<string[] | null, Error>(
    WISHLIST_KEY,
    async () => {
      const result: string | null = await AsyncStorage.getItem(WISHLIST_KEY)

      return result ? JSON.parse(result) : []
    }
  )
}

export const useUpdateWishlist = () => {
  const queryClient = useQueryClient()
  return useMutation(
    WISHLIST_KEY,
    async (itemId: string) => {
      const result: string | null = await AsyncStorage.getItem(WISHLIST_KEY)

      const currentWishlist = result ? JSON.parse(result) : []
      const newWishlist = getUpdatedWishlist(currentWishlist, itemId)

      await AsyncStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist))

      return newWishlist
    },
    {
      onSuccess: () => queryClient.invalidateQueries(WISHLIST_KEY),
    }
  )
}
