export const getUpdatedWishlist = (wishlist: string[], itemId: string) => {
  if (wishlist.includes(itemId)) {
    return wishlist.filter((id: string) => id !== itemId)
  }

  return [...wishlist, itemId]
}
