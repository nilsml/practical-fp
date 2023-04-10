export const applyForAddress = (address: string): Promise<boolean> =>
  new Promise((resolve, reject) => (!address ? reject('Address not supplied') : setTimeout(() => resolve(true), 500)))
