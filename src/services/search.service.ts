import { useQuery } from 'react-query'
import { parseSearchData } from '../utils/search.util'

const OPEN_LIBRARY_API_URL = 'http://openlibrary.org'

enum OpenLibraryAPIEndpoints {
  Search = 'search.json'
}

export interface Doc {
  key: string
  type: string
  seed: string[]
  title: string
  title_suggest: string
  has_fulltext: boolean
  edition_count: number
  edition_key: string[]
  publish_date: string[]
  publish_year: number[]
  first_publish_year: number
  number_of_pages_median: number
  isbn: string[]
  last_modified_i: number
  ebook_count_i: number
  cover_edition_key: string
  cover_i: number
  publisher: string[]
  author_key: string[]
  author_name: string[]
  publisher_facet: string[]
  _version_: any
  author_facet: string[]
  lcc: string[]
  subject: string[]
  subject_facet: string[]
  lcc_sort: string
  subject_key: string[]
}

export interface SearchResults {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: Doc[]
  num_found: number
  q: string
  offset?: number
}

export const useSearch = (searchTerm: string) => {
  const { data, ...rest } = useQuery<SearchResults, Error>(
    'searchData',
    () =>
      fetch(
        `${OPEN_LIBRARY_API_URL}/${OpenLibraryAPIEndpoints.Search}?title=${searchTerm}`
      ).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      enabled: false
    }
  );

  return {
    data: data ? parseSearchData(data) : undefined,
    ...rest
  }
}