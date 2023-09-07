import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import * as RTE from 'fp-ts/ReaderTaskEither'

export interface WebhookResult {
  text: string
}

export interface Webhook {
  send: (result: boolean) => Promise<WebhookResult>
}

export const applyForAddress = (address: string): Promise<boolean> =>
  new Promise((resolve, reject) => (!address ? reject('Address not supplied') : setTimeout(() => resolve(true), 500)))

type PostAnswerType = (result: boolean) => RTE.ReaderTaskEither<Webhook, Error, WebhookResult>
export const postAnswer: PostAnswerType = (result) => (webhook) => TE.tryCatch(() => webhook.send(result), E.toError)