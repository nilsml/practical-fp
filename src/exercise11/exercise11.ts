/*
In this exercise you should use flow instead of pipe to do accomplish the same thing.
*/

import { IO } from 'fp-ts/IO' // IO is representing a thunk; () =>
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import * as RTE from 'fp-ts/ReaderTaskEither'
import { pipe } from 'fp-ts/function'

import { applyForAddress, postAnswer, Webhook, WebhookResult } from './api'

type SubmitType = IO<RTE.ReaderTaskEither<Webhook, string | Error, WebhookResult>>
export const submit: SubmitType = () => flow(

)