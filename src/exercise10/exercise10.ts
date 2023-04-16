/* It is time to have a look at the Reader which makes it possible to inject dependencies in a smart way.

*/
import { IO } from 'fp-ts/IO' // IO is representing a thunk; () =>
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import * as RTE from 'fp-ts/ReaderTaskEither'
import { pipe } from 'fp-ts/function'

import { applyForAddress, postAnswer, Webhook, WebhookResult } from './api'

type SubmitType = IO<RTE.ReaderTaskEither<Webhook, string | Error, WebhookResult>>
export const submit: SubmitType = () => pipe(
  E.fromNullable('EnvNotSet')(process.env.ADDRESS),
  TE.fromEither,
  TE.chainW((address) => TE.tryCatch(() => applyForAddress(address), () => 'MissingUrl')),
  RTE.fromTaskEither,
  RTE.chainW(postAnswer)
)