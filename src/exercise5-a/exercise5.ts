/*
In this exercise we shall have a look at 'of'. 'of' lifts something into a context so that we can do other operations on it (like map and chain)
To make sure you understand how 'of' works, you'll get to implement a version of it.

Exercise:
---------

Given the type Context, implement a 'of' function that lifts a value of type T into this context.
The test must be green when you are finished
*/ 

export type Context<T> = { foo: T }

type Of = <T>(a: T) => Context<T>
const of: Of = 

export const wrappedValue = <T>(value: T) => of(value)

