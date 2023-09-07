/*
The last basic function that we need to implement is fold.
We are using fold to execute functions on the data that is in the Context, and return something.
In our contrieved example this is straight forward as we only have to deal with one value.


Exercise:
---------

Given the type Context and the implemented 'of' function, implement a fold function that fullfills the requirements as defined by the type Fold
The test must be green when you are finished
*/
import { Context } from '../exercise5/solution'

type Fold = <A, B>(f: (a: A) => B) => (wrappedValue: Context<A>) => B 
export const fold: Fold = 
