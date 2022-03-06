import { BookCoverSize, getBookCoverUrl } from "../book.util"

describe('getBookCoverUrl', () => {
  it('should return a cover url with large size', () => {
    const bookCoverUrl = getBookCoverUrl(['100100'], BookCoverSize.large)

    expect(bookCoverUrl).toEqual({
      uri: 'https://covers.openlibrary.org/b/isbn/100100-L.jpg'
    })
  })

  it('should return a cover url with medium size as default if no size is provided', () => {
    const bookCoverUrl = getBookCoverUrl(['100100'])

    expect(bookCoverUrl).toEqual({
      uri: 'https://covers.openlibrary.org/b/isbn/100100-M.jpg'
    })
  })

  it('should return a default cover image if there is no valid isbn', () => {
    const bookCoverUrl = getBookCoverUrl([], BookCoverSize.small)

    expect(bookCoverUrl).toEqual({
      testUri: '../../../src/assets/images/book.jpeg'
    })
  })
})