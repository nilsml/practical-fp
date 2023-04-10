import { fold } from 'fp-ts/Either'
import dotenv from 'dotenv'
import { fail } from '../common/jest-utils'
import { submit, EnvErrorType, ApiErrorType } from './exercise9'

describe('Test submitting application without address', () => {
  test('Gives an EnvNotSet', async () => {
    const result = await submit()()
    fold(
      (error: EnvErrorType | ApiErrorType) => expect(error).toBe('EnvNotSet'),
      () => fail('Should not happen')
    )(result)
  })
})

describe('Test submitting application with address', () => {
  beforeAll(() => {
    dotenv.config()
  })

  test('Gives an EnvNotSet', async () => {
    const result = await submit()()
    fold(
      () => fail('Should not fail'),
      (result: boolean) => expect(result).toBe(true)
    )(result)
  })
})
