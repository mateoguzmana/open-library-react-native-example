export const getUpdatedReadingGroups = (readingGroups: string[], itemId: string) => {
  if (readingGroups.includes(itemId)) {
    return readingGroups.filter((id: string) => id !== itemId)
  }

  return [...readingGroups, itemId]
}
  