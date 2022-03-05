export const getBookCoverUrl = (isbn: string[]) => {
  return isbn?.[0]
    ? { uri: `https://covers.openlibrary.org/b/isbn/${isbn[0] || ""}-M.jpg` }
    : require('../assets/images/book.jpeg');
};
