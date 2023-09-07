/* Currying

When applying, the municipality is taking a certain fee.
The fee is calculated based on the salary of the applicant and a factor based on current value of G.
To make the fee as big as possible, also illicit work is taken into account.

Exercise:
---------
Please rewrite the code using currying to simplify and make reuse of code easier.

*/

import { g as G } from './api'

export type IncomeType = {
  mainIncome: number,
  illicitWork: number
}

const calculateCost = (g: number, income: number) => {
  const base = g * 2/100
  const incomeFactor = income * 1/100

  return base + incomeFactor
}

const calculate = (g: () => number, income: IncomeType) => {
  const calculateFormMain = calculateCost(g(), income.mainIncome)
  const calculateForIllicit = calculateCost(g(), income.illicitWork)

  return calculateFormMain + calculateForIllicit
}

export const submit = (income: IncomeType) => calculate(G, income)
