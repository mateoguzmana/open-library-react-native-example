import { getUpdatedList } from "../list.util"

describe('getUpdatedList', () => {
  it('should add an item to the list if it does not exist yet', () => {
    const updatedList = getUpdatedList([], '100100')

    expect(updatedList).toEqual(['100100'])
  })

  it('should remove an item from the list if it exists', () => {
    const updatedList = getUpdatedList(['100100'], '100100')

    expect(updatedList).toEqual([])
  })

  it('should allow adding multiple items to the list', () => {
    const updatedList = getUpdatedList(['100100'], '200200')

    expect(updatedList).toEqual(['100100', '200200'])
  })
})