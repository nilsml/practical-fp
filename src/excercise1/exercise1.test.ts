import { submit } from './exercise1'

test('Invalid name fails', () => {
  expect(submit('')).toBe(false)
})

test('Valid name gives success', () => {
  expect(submit('A Name')).toBe(true)
})