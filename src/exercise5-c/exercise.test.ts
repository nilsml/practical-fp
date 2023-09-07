
import { of } from '../exercise5-a/solution'
import { chain } from './exercise'

describe("Test 'chain' function", () => {
  describe('Expect map to make changes to wrapped value', () => {
    test('Expect text to be changed', () => {
      const input = of('text')
      const output = chain((t: string) => ({ foo: t + '_altered' }))(input)
      expect(output).toEqual({ foo: `${input.foo}_altered`})
    })

    test('Expect change of type to work', () => {
      const input = of(10)
      expect(chain((n: number) => ({ foo: n.toString() }))(input)).toEqual({ foo: '10' })
    })
  })
})
