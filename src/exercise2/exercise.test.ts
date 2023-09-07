import { submit } from './exercise'

test('Empty name is failing', () => {
  expect(submit('', new Date(1976, 1, 1))).toBe(false)
})

test('Valid name and date gives success', () => {
  expect(submit('Leif Juster', new Date(1976, 1, 1))).toBe(true)
})

test('Valid name and invaliddate is failing', () => {
  expect(submit('Leif Juster', new Date(2020, 1, 1))).toBe(false)
})
