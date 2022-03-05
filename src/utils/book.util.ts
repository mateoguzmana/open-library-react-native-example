export enum BookCoverSize {
  small = "S",
  medium = "M",
  large = "L"
}

export const getBookCoverUrl = (
  isbn: string[],
  size: BookCoverSize = BookCoverSize.medium
) =>
  isbn?.[0]
    ? {
        uri: `https://covers.openlibrary.org/b/isbn/${
          isbn[0] || ""
        }-${size}.jpg`
      }
    : require("../assets/images/book.jpeg")
