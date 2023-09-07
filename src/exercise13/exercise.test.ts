import dotenv from 'dotenv'
import * as E from 'fp-ts/Either'
import * as T from 'fp-ts/Task'
import { fail } from '../common/jest-utils'
import { Webhook, WebhookResult } from './api'
import { submit } from './exercise'

describe('Test submitting application with webhook', () => {
  const mockWebhook = (text: string) => ({
    send: () => Promise.resolve({ text } as WebhookResult),
  }) as Webhook

  beforeAll(() => {
    dotenv.config()
  })

  test('Gives success 1', (done) => {
    const result = submit()(mockWebhook('ok'))
    result()
      .then((r) => {
        E.fold(
          (error: string | Error) => fail(error.toString()),
          ({ text }: WebhookResult) => expect(text).toBe('ok')
        )(r)
        done()
      })
      .catch((e) => {
        fail(e)
        done()
      })
  })

  test('Gives success 2', async () => {
    const result = submit()(mockWebhook('ok'))
    try {
      await T.map(
        E.fold(
          (error: string | Error) => fail(error.toString()),
          ({ text }: WebhookResult) => expect(text).toBe('ok')
        )
      )(result)()
    } catch (e) {
      fail(e)
      console.error(e)
    }
  })
})
