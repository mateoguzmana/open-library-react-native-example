export const getUpdatedList = (list: string[], itemId: string) => {
  if (list.includes(itemId)) {
    return list.filter((id: string) => id !== itemId)
  }

  return [...list, itemId]
}
