import { Client, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const createClasses = async (clientOrToken: Client | string, classes: string, consoleLog = false as boolean) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  if (client === undefined) throw new Error('Fauna client is undefined')
  return client
    .query(faunaQuery.Create(faunaQuery.Ref('classes'), { classes }))
    .then(() => {
      if (consoleLog) console.log('\x1b[34m%s\x1b[0m', 'Created class: ', classes)
    })
    .catch((e) => {
      if (consoleLog) console.log('\x1b[33m%s\x1b[0m', 'Error creating class: ', classes)
    })
}

export default createClasses
