import { g as G } from './api'

export type IncomeType = {
  mainIncome: number,
  illicitWork: number
}

const calculateCost = (g: number) => (income: number) => {
  const base = g * 2/100
  const incomeFactor = income * 1/100

  return base + incomeFactor
}

export const submit = ((g: () => number) => (income: IncomeType) => {
  const calculateWithBase = calculateCost(g())

  return calculateWithBase(income.mainIncome) + calculateWithBase(income.illicitWork)
})(G)
