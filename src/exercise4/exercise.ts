/* Composition
In this excercise we shall practice what we have learned about composition.
Two functions exist already. One is removing the first string in a string array, and returns the rest.
The other one removes the last word, and retunrns the rest.

Excercise:
----------
Implement the two functions 'removeFirstTwoWords' and 'removeLastWord' by the use of composition and make the tests go green
*/

import { compose } from '../utility-functions'

const removeFirstWord = (stringArray: string[]) => stringArray.length > 0 ? [...stringArray].slice(1) : stringArray
export const removeFirstTwoWords =

const removeLastWord = (stringArray: string[]) => stringArray.length > 0 ? [...stringArray].slice(0, -1) : stringArray
export const removeFirstAndLastWord =
