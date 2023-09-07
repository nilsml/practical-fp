
/* Taking fp-ts to the next level, introducing Either<E, T>
Either can be very usefull when dealing with functions that can fail.
It could be an api or just a function that is unpredictable.
In addition to Option that gives us the value or none, Either will give us the value OR an alternative value.
The alternative value could be an error message or a default value to use if no other value is presented.
Reference: https://grossbart.github.io/fp-ts/modules/Either.ts.html
*/
import { Either, fromNullable } from 'fp-ts/Either'


// A good example of something that could fail is getting ENV variables in Node
export const getAddress = () => process.env.ADDRESS

// Exercise: Create a safe function for getting address and returning an error message if not
type GetAddressSafelyType = () => Either<string, string>
export const getAddressSafely: GetAddressSafelyType = () => fromNullable('Address not found')(process.env.ADDRESS)