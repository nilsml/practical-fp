import { today, numberOfDaysLeftInThisMonth, daysInYear } from './api'
import { compose } from '../utility-functions'

  // 1. Multiply number of days left in this month with Pi
  const calc1 = (numberOfDaysLeft: number) => (ageFamilyMember: number) =>
    (ageFamilyMember / 10) * numberOfDaysLeft * Math.PI

  // 2. The result from the previous calculation is subtracted from number of days in a year
  const calc2 = (numberOfDaysInThisYear: number) => (resultCalc1: number) => numberOfDaysInThisYear - resultCalc1

  // 3. The result from the first calculation is also used together with the size of the land
  const calc3 = (sizeInSquareMeters: number) => (resultCalc2: number) => Math.sqrt(sizeInSquareMeters) + resultCalc2

  // 4. The fourth and final sub-calculation takes the result from calc1 and cal3
  const calc4 = (resultCalc3: number) => resultCalc3 - 10

  
  // TODO: Find a way to use both calc1+cal2 in two other calculations to show the power of composition
  // 1->2->3 and 1->2->4 and 3->4 perhaps
  // Need to have different input for first function multiple times to show how easy it is with composition
  // compositeFunction(something) + compositeFunction(somcethingElse) + ...

  const ages = [10, 15, 30, 35]

  export const submit = (area: number) => {
    const calculate = compose(calc4, calc3(area), calc2(daysInYear(today.getFullYear())), calc1(numberOfDaysLeftInThisMonth))
    const sum = ages.reduce((acc, age) => acc + calculate(age))
    return sum > 1500 ? 30 : 60
  }
