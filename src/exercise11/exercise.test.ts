import { right, left } from 'fp-ts/Either'
import { fail } from '../common/jest-utils'
import {
  getMostLovedPlaceForSomeoneWhoCares,
  getMostLovedPlaceForAnyoneElse,
  getMostLovedPlaceForSomeoneWhoCaresWithTask,
  getMostLovedPlaceForAnyoneElseWithTask
} from './solution'

describe('Testing with promises', () => {
  test('Happy path resolves and gives the right result', (done) => {
    getMostLovedPlaceForSomeoneWhoCares()
      .then((place) => {
        expect(place).toBe('Askøy')
        done()
      })
      .catch(() => {
        fail('Not supposed to happen')
        done()
      })
  })
  test('Sad part gives an error', (done) => {
    getMostLovedPlaceForAnyoneElse()
      .then(() => {
        fail('Not supposed to happen')
        done()
      })
      .catch((error) => {
        expect(error).toBe('Then sodd off!')
        done()
      })
  })
})

describe('Testing with TaskEither', () => {
  test('Happy path resolves and gives the right result', (done) => {
    getMostLovedPlaceForSomeoneWhoCaresWithTask().then((place) => {
      expect(place).toStrictEqual(right('Askøy'))
      done()
    })
    .catch(() => {
      fail('Not supposed to happen')
      done()
    })
  })
  test('Sad part gives error', (done) => {
    getMostLovedPlaceForAnyoneElseWithTask().then((place) => {
      expect(place).toStrictEqual(left('Then sodd off!'))
      done()
    })
    .catch(() => {
      fail('Not supposed to happen')
      done()
    })
  })
})
