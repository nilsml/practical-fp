/* Pure function, TODO: May skip this one and use exercise2 for both pure function and immutability

We shall create a function that approves an application if applicant has a valid name
and time is within working hours (8 - 16)

Have a look at the functions below. Are they pure?

Excercise:
----------
See if you can make changes to the functions (and tests if needed) to make them pure

*/

const hourOfTheDay = (new Date()).getHours() 
const withinWorkingHours = hourOfTheDay >= 8 && hourOfTheDay < 16

export const submit = (name: string) => {
  if ((!!name?.length) && withinWorkingHours)
    return true

  return false
}