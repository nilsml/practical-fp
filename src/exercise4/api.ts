export const today = new Date()
export const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate()
export const daysInYear = (year: number) => [...Array(13).keys()].reduce((acc, month) => acc + daysInMonth(year, month + 1))
export const numberOfDaysLeftInThisMonth = daysInMonth(today.getFullYear(), today.getMonth() + 1) - today.getDate()
