/* In the next exercise we will take error handling one step further.
Until now we have used strings for representing errors. However sometimes it is better to use proper types.
And for different functions, different types may be used.
fp-ts ts has a way of dealing with different error types, and it is referred to as widening a type.
As you may have guessed, for widening sum types are perfect.

Exercise:
---------
This exercise is basically the same as exercise8 with a couple of differences:
1. The function getting ENV variable will use the EnvErrorType
2. the function calling the API will use the ApiErrorType
3. Return type for the function is defined by SubmitType as defined below

Tips to get you started: For the chain functions there is usueally W variant.
W means Widen. Functions that end with W are able to aggregate errors into a union (for Either based data types) or environments into an intersection (for Reader based data types).
Reference: https://gcanti.github.io/fp-ts/guides/code-conventions.html#what-a-w-suffix-means-eg-chainw-or-chaineitherkw
*/

export type EnvErrorType = 'EnvNotSet' | 'EnvNotValid'
export type HttpError = 401 | 404
export type ApiErrorType = 'MissingUrl' | HttpError

import { IO } from 'fp-ts/IO' // IO is representing a thunk; () =>
import * as TE from 'fp-ts/TaskEither'
import { applyForAddress } from './api'

type SubmitType = IO<TE.TaskEither<EnvErrorType | ApiErrorType, boolean>>
export const submit: SubmitType = 