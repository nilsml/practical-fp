export const getMostLovedPlaceInNorway = (iDontCare: boolean): Promise<string> =>
  new Promise((resolve, reject) => (iDontCare ? reject('Then sodd off!') : setTimeout(() => resolve('Askøy'), 500)))
