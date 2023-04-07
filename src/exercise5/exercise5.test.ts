import { some, none } from 'fp-ts/Option'
import { head, head2 } from './exercise5'

describe('Test head function', () => {
  test('Expect vanilla case to work', () => {
    expect(head(['a', 'b'])).toBe('a')
  })

  test('What if we use an empty array?', () => {
    const a: Array<string> = []
    const first = head(a)
    expect(first?.charAt(0)).toBe(undefined)
  })
})

describe('Test head2 function', () => {
  test('Expect some(result) if string array contains something', () => {
    expect(head2(['a', 'b'])).toStrictEqual(some('a'))
  })

  test('Expect empty array to give none result', () => {
    expect(head2([])).toStrictEqual(none)
  })
})
