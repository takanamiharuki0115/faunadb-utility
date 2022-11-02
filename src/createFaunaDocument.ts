import { Client, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const createFaunaDocument = async (clientOrToken: Client | string, classes: string, data = {} as any) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  if (client === undefined) throw new Error('Fauna client is undefined')
  return client
    .query(
      faunaQuery.Create(faunaQuery.Ref('classes/' + classes), {
        data
      })
    )
    .then(async (response: any) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    })
    .catch((error: any) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
export { faunaQuery }

export default createFaunaDocument
