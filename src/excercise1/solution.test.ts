
import { submit, submit2 } from './solution'

test('Invalid name fails', () => {
  expect(submit('')).toBe(false)
})

test('Valid name gives success if within working hours', () => {
  expect(submit2(new Date(2023,1,1,13,0,0))('A Name')).toBe(true)
})