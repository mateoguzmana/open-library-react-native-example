import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import FastImage from 'react-native-fast-image';
import { Doc } from '../services/search.service'
import { BookCoverSize, getBookCoverUrl } from '../utils/book.util'

interface BookCoverProps {
  book: Doc
  size: BookCoverSize
}

export const BookCover: React.FC<BookCoverProps> = ({ book, size, ...props }) => {
  const [isInvalidImage, setIsInvalidImage] = useState<boolean>(true)

  const imageUrl = getBookCoverUrl(book.isbn, size)
  const defaultImage = getBookCoverUrl([], size)

  useEffect(() => {
    const isOpenLibraryImage = JSON.stringify(imageUrl).includes('covers.openlibrary')

    if (isOpenLibraryImage) {
      Image.getSize(
        imageUrl.uri,
        (width, height) => {
          // Some images are not available in OpenLibrary, they are returned with status 200
          // but the image size is 1x1 pixels. We need to check the size of the image to know if it's valid.
          width === 1 || height === 1 ? setIsInvalidImage(true) : setIsInvalidImage(false)
        }
      )
    }
  }, [imageUrl])

  return (
    <FastImage source={isInvalidImage ? defaultImage : imageUrl} {...props} />
  )
}
