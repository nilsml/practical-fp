import dotenv from 'dotenv'
import * as E from 'fp-ts/Either'
import * as T from 'fp-ts/Task'
import { fail } from '../common/jest-utils'
import { Webhook, WebhookResult } from './api'
import { submit } from './exercise10'

describe('Test submitting application with webhook', () => {
  const mockWebhook = {
    send: (result: boolean) => {
      expect(result).toBe(true)
      Promise.resolve({ text: 'ok' } as WebhookResult)
    }
  } as Webhook

  beforeAll(() => {
    dotenv.config()
  })

  test('Gives success', async () => {
    const result = submit()(mockWebhook)
    try {
      await T.map(
        E.fold(
          (error: string | Error) => fail(error.toString()),
          (res: WebhookResult) => expect(res).toBe('ok')
        )
      )(result)()
    } catch (e) {
      fail(e)
      console.error(e)
    }
  })
})
