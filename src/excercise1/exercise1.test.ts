import { run } from './exercise1'

test('Vanilla version works', () => {
  expect(run(1)).toBe(3)
})

export const foo = 1