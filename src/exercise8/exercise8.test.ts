import dotenv from 'dotenv'
import { submit } from './exercise8'

describe('Test submitting application without address', () => {
  test('Gives an error message back when address is not found', async () => {
    const result = await submit()()
    console.log(result)
    expect(result).toBe('Address not found')
  })
})

describe('Test submitting application with address', () => {
  beforeAll(() => {
    dotenv.config()
  })

  test('Gives a success message if application is accepted', async () => {
    const result = await submit()()
    expect(result).toBe('Submission ok!')
  })
})