/* Immutability

We shall export a function that returns true if:
- Person has a name
- Person is more than 18 years old

*/

let isValid = false

const getAgeFromBirthDate = (birthDate: Date) => {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
  }
  return age
}

const validateName = (name: string) => {
  if (name?.length) isValid = true
}

const validateAge = (age: number) => {
  isValid = (age >= 18) && isValid
}

export const submit = (name: string, birthDate: Date) => {
  validateName(name)
  const age = getAgeFromBirthDate(birthDate)
  validateAge(age)

  return isValid
}