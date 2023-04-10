/* In the next exercise we will take error handling one step further.
Until now we have used strings for representing errors. However sometimes it is better to use proper types.
And for different functions, different types may be used.
fp-ts ts has a way of dealing with different error types, and it is referred to as widening a type.
As you may have guessed, for widening sum types are perfect.

This exercise is basically the same as exercise8 with a couple of differences:
1. The function getting ENV variable will use the EnvErrorType
2. the function calling the API will use the ApiErrorType
3. Return type for the function should be SubmitType as defined below
*/

export type EnvErrorType = 'EnvNotSet' | 'EnvNotValid'
export type HttpError = 401 | 404
export type ApiErrorType = 'MissingUrl' | HttpError

import { IO } from 'fp-ts/IO' // IO is representing a thunk; () =>
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { applyForAddress } from './api'

type SubmitType = IO<TE.TaskEither<EnvErrorType | ApiErrorType, boolean>>
export const submit: SubmitType = () => pipe(
  E.fromNullable('EnvNotSet' as EnvErrorType)(process.env.ADDRESS),
  TE.fromEither,
  TE.chainW((address) => TE.tryCatch(() => applyForAddress(address), () => 'MissingUrl' as ApiErrorType))
)
