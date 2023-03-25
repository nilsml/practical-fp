const getAgeFromBirthDate = (birthDate: Date) => {
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  return (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) ? age - 1 : age
}

const validateName = (name: string) => (!!name?.length)

const validateAge = (age: number) => (age >= 18)

export const submit = (name: string, birthDate: Date): boolean =>
  validateName(name) &&
  validateAge(getAgeFromBirthDate(birthDate))