import { submit } from './exercise4'

test('Works', () => {
  expect(submit(40000)).toBe(30)
})

test('Works 2', () => {
  expect(submit(10)).toBe(60)
})