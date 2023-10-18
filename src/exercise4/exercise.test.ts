import { removeFirstTwoWords, removeFirstAndLastWord } from './exercise'

test('First two words are removed from array', () => {
  expect(removeFirstTwoWords(['First', 'Second', 'Third', 'Last'])).toEqual(['Third', 'Last'])
})

test('First two words are removed from array', () => {
  expect(removeFirstAndLastWord(['First', 'Second', 'Third', 'Last'])).toEqual(['Second', 'Third'])
})