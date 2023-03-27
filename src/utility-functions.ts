
// Simplified ts version of compose
export const compose = <T>(fn1: (a: T) => T, ...fns: Array<(a: T) => T>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1)

// Simplified ts version of pipe
export const pipe = <T>(fn1: (a: T) => T, ...fns: Array<(a: T) => T>) =>
  fns.reduceRight((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1)