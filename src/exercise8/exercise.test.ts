
import { of } from '../exercise5/solution'
import { fold } from './exercise'

describe("Test 'fold' function", () => {
  describe('Expect fold to make changes to wrapped value and return result', () => {
    test('Expect altered text to be output', () => {
      const input = of('text')
      const output = fold((t: string) => t + '_altered')(input)
      expect(output).toBe(`${input.foo}_altered`)
    })

    test('Expect change of type to work', () => {
      const input = of(10)
      expect(fold((n: number) => n.toString())(input)).toBe('10')
    })
  })
})
