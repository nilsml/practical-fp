/* Our first meeting with fp-ts
In this exercise we will have a look at how we can use Option instead of handling nulls in our code.
We will start off nice and gently to get you familiar with the fp-ts way of doing things.
Reference: https://grossbart.github.io/fp-ts/modules/Option.ts.html
*/ 

// A function that gives first element in string array if not empty
export const head = (strArray: Array<string>): string | null => strArray.length > 0 ? strArray[0] : null

// Convert the head function to a function using Option instad of null
export const head2 = undefined