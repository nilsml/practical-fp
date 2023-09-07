/* Our first meeting with fp-ts
In this exercise we will have a look at how we can use Option instead of handling nulls in our code.
We will start off nice and gently to get you familiar with the fp-ts way of doing things.
Reference: https://grossbart.github.io/fp-ts/modules/Option.ts.html
*/ 

import { Option, some, none, fromNullable, map, chain } from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

// Original
export const head = (strArray: Array<string>): string | null => strArray.length > 0 ? strArray[0] : null

// Example 1
export const head2 = (strArray: Array<string>): Option<string> => strArray.length > 0 ? some(strArray[0]) : none

// Example 2
export const head3 = (strArray?: Array<string>): Option<string> =>
  pipe(
    fromNullable(strArray),
    map(s => s.length > 0 ? s[0] : '')
  )

// Example 3
export const head4 = (strArray?: Array<string>): Option<string> =>
  pipe(
    fromNullable(strArray),
    chain(s => s.length > 0 ? some(s[0]) : none)
  )
