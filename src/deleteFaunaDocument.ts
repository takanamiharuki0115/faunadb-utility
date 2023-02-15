import { Client, FaunaHttpErrorResponseContent, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const deleteFaunaDocument = async (clientOrToken: Client | string, classes: string, id: string, consoleLog = false as boolean) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  if (client === undefined) throw new Error('Fauna client is undefined')
  return client
    .query(faunaQuery.Delete(faunaQuery.Ref(`classes/${classes}/${id}`)))
    .then((response: object) => {
      if (consoleLog) console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    })
    .catch((error: FaunaHttpErrorResponseContent) => {
      if (consoleLog) console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}

export default deleteFaunaDocument
