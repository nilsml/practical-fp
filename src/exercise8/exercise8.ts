/* It is time to put things we have learned this far together and make some proper use of it.
We will revisit our process for applying to build something near the sea in Norway.
As you have seen this is a complex and tedious task, and we will implement more of the rules using functional concepts.

We will start simple by just calling an api using the address from ENV, but we will have proper error handling doing it.
1. Get address from ENV to use with the api
2. If the address is not present, stop the application and return the error message "Address not found"
3. If the address is found, use it to call api
4. If not, stop the application and return the error message "Application not submitted"
5. If everything goes well, return "Submission ok!"
*/

import * as T from 'fp-ts/Task'
import { applyForAddress } from './api'

export const submit: () => T.Task<string> = () => 