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
export const fold: Fold = (f) => ({ foo }) => f(foo)

// Example of a more complex context
type ComplexContext<A, B> = { foo: A, bar: B }
export type Of = <A, B>(a: A, b: B) => ComplexContext<A, B>
export const of: Of = (a, b) => ({ foo: a, bar: b })

type Fold2 = <A, B, C>(f1: (a: A) => C, f2: (b: B) => C) => (wrappedValue: ComplexContext<A, B>) => C 
export const fold2: Fold2 = (f1, f2) => ({ foo, bar }) => f1(foo) || f2(bar)
