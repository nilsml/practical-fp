import { Context, wrappedValue } from './exercise'

describe("Test 'of' function", () => {
  describe('Expect wrapped value to be the same as the parameter', () => {
    test('Expect text to be wrapped', () => {
      const input = 'text'
      expect(wrappedValue(input)).toEqual(({ foo: input }))
    })

    test('Expect number to be wrapped', () => {
      const input = 10
      expect(wrappedValue(input)).toEqual(({ foo: input }))
    })
  })
})
