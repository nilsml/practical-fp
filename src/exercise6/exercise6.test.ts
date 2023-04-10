import { fold } from 'fp-ts/Either'
import { getAddress, getAddressSafely } from './exercise6'
import dotenv from 'dotenv'
import { fail } from '../common/jest-utils'

describe('Getting address from ENV', () => {
  describe('Without running DotEnv', () => {
    test('Without running DotEnv, the address is undefined', () => {
      expect(getAddress()).toBe(undefined)
    })

    test('Without running DotEnv, our safe function gives an error message', () => {
      fold(
        (error: string) => {
          expect(error).toBeDefined()
        },
        () => {
          // Failing the test
          fail('This should not happen')
        }
      )(getAddressSafely())
    })
  })

  describe('After running DotEnv', () => {
    beforeAll(() => {
      dotenv.config()
    })

    test('When DotEnv has been run, the address is something', () => {
      expect(getAddress()).toBeDefined()
    })

    test('Our safe function is giving a wrapped value', () => {
      fold(
        () => {
          // Failing the test
          fail('This should not happen')
        },
        (value) => {
          expect(value).toBeDefined()
        }
      )(getAddressSafely())
    })
  })
})
