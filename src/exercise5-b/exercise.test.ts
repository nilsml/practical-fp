
import { of } from '../exercise5-a/solution'
import { map } from './exercise'

describe("Test 'map' function", () => {
  describe('Expect map to make changes to wrapped value', () => {
    test('Expect text to be changed', () => {
      const input = of('text')
      const output = map((t: string) => t + '_altered')(input)
      expect(output).toEqual({ foo: `${input.foo}_altered`})
    })

    test('Expect change of type to work', () => {
      const input = of(10)
      expect(map((n: number) => n.toString())(input)).toEqual({ foo: '10' })
    })
  })
})
