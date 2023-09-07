import { IncomeType, submit } from './exercise'

test('Calculation is correct', () => {
  expect(Math.round(submit({ mainIncome: 100000, illicitWork: 2000000 } as IncomeType))).toBe(25745)
})