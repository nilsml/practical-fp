/* Composition
In this excercise we shall calculate the time it should take to process the application.
It is a complex task and involves multiple sub-calculations.
*/

import { compose } from '../utility-functions'

export const removeFirstWord = (stringArray: string[]) => stringArray.length > 0 ? [...stringArray].slice(1) : stringArray
export const removeFirstTwoWords = compose(removeFirstWord, removeFirstWord)
const removeLastWord = (stringArray: string[]) => stringArray.length > 0 ? [...stringArray].slice(0, -1) : stringArray
export const removeFirstAndLastWord = compose(removeLastWord, removeFirstWord)
