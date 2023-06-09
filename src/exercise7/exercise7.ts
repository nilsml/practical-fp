/* Another thing that is common for a developer these days are asynchronous functions.
Functions that may possibly return something to us in the future.
In Typescript these are typically represented as promises.
One functional way of working with promises would be to just use then directly, like we did in the old days.
In fp-ts we have Tasks to make it more pleasant. It also allows us to combine it with other fp-ts types like Eithers.
*/
import * as TE from 'fp-ts/TaskEither'
import { getMostLovedPlaceInNorway } from './api'


// Use provided api to get the best place in Norway for someone who cares
export const getMostLovedPlaceForSomeoneWhoCares = () => getMostLovedPlaceInNorway(false)
// Use provided api to get the best place in Norway for the ones who don't care
export const getMostLovedPlaceForAnyoneElse = () => getMostLovedPlaceInNorway(true)

// Create a function that has the following signature, and is doing the same as above
type TEReturnType = TE.TaskEither<string, string>
export const getMostLovedPlaceForSomeoneWhoCaresWithTask: TEReturnType =

// Exercise: Create a function for the sad part
export const getMostLovedPlaceForAnyoneElseWithTask: TEReturnType =