/*
Continuing on the previous exercise, we will be using our new Context and make it more usable by implementing a map function


Exercise:
---------

Given the type Context and the implemented 'of' function, implement a map function that fullfills the requirements as defined by the type Map
The test must be green when you are finished
*/
import { Context } from '../exercise5/solution'

type Map = <A, B>(f: (a: A) => B) => (wrappedValue: Context<A>) => Context<B> 
export const map: Map = (f) => ({ foo }) => ({ foo: f(foo)})