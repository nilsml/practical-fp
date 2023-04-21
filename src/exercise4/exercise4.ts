/* Composition
In this excercise we shall calculate the time it should take to process the application.
It is a complex task and involves multiple sub-calculations.
*/
import { today, numberOfDaysLeftInThisMonth, daysInYear } from './api'


export const submit = (area: number) => {
  // 1. Multiply number of days left in this month with Pi
  const calc1 = (numberOfDaysLeft: number, ageFamilyMember: number) =>
    (ageFamilyMember / 10) * numberOfDaysLeft * Math.PI

  // 2. The result from the previous calculation is subtracted from number of days in a year
  const calc2 = (numberOfDaysInThisYear: number, resultCalc1: number) => numberOfDaysInThisYear - resultCalc1

  // 3. The result from the first calculation is also used together with the size of the land
  const calc3 = (sizeInSquareMeters: number, resultCalc2: number) => Math.sqrt(sizeInSquareMeters) + resultCalc2

  // 4. The fourth and final sub-calculation takes the result from calc1 and cal3
  const calc4 = (resultCalc3: number) => resultCalc3 - 10

  
  // Exercise:
  // ---------  
  // Find a way to use both calc1+cal2 in two other calculations to show the power of composition
  // 1->2->3 and 1->2->4 and 3->4 perhaps
  // Need to have different input for first function multiple times to show how easy it is with composition
  // compositeFunction(something) + compositeFunction(somcethingElse) + ...

  const ages = [10, 15, 30, 35]

  let sum = 0
  ages.forEach((age) => {
    const res1 = calc1(numberOfDaysLeftInThisMonth, age)
    const res2 = calc2(daysInYear(today.getFullYear()), res1)
    const res3 = calc3(area, res2)
    const res4 = calc4(res3)
    sum = sum + res4
  })

  return sum > 1500 ? 30 : 60
}
