import { Client, FaunaHttpErrorResponseContent, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const createClasses = async (clientOrToken: Client | string, classes: string, consoleLog = false as boolean) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  if (client === undefined) throw new Error('Fauna client is undefined')
  return client
    .query(faunaQuery.Create(faunaQuery.Ref('classes'), { classes }))
    .then((response: object) => {
      if (consoleLog) console.log('\x1b[34m%s\x1b[0m', 'Created class: ', classes, response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    })
    .catch((error: FaunaHttpErrorResponseContent) => {
      if (consoleLog) console.log('\x1b[33m%s\x1b[0m', 'Error creating class: ', classes, error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}

export default createClasses
