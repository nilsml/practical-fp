/* Pure function, TODO: May skip this one and use exercise2 for both pure function and immutability

We shall create a function that approves an application if applicant has a valid name
and time is within working hours (8 - 16)

Excercise:
----------
See if you can make changes to the functions (and tests if needed) to make them pure

*/

const hourOfTheDay = (date: Date) => date.getHours()
const withinWorkingHours = (hourOfTheDay: number) => hourOfTheDay >= 8 && hourOfTheDay < 16

export const submit = ((date: Date) => (name: string) => {
  if (!!name?.length && withinWorkingHours(hourOfTheDay(date))) return true

  return false
})(new Date()) // Please note that date will be the same the whole time. Not possible to make pure and change with time.

export const submit2 = (
  (date: Date) => (name: string) =>
    !!name?.length && withinWorkingHours(hourOfTheDay(date))
)
