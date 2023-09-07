/*
Now that we have a map function, let's also create the chain function. It is quite similar, so this should be a breeze :)


Exercise:
---------

Given the type Context and the implemented 'of' function, implement a chain function that fullfills the requirements as defined by the type Chain
The test must be green when you are finished
*/
import { Context } from '../exercise5-a/solution'

type Chain = <A, B>(f: (a: A) => Context<B>) => (wrappedValue: Context<A>) => Context<B> 
export const chain: Chain = (f) => ({ foo }) => f(foo)
