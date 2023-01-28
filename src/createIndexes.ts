import { Client, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const createIndexes = async (clientOrToken: Client | string, classes: string, index: string, consoleLog = false as boolean) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  if (client === undefined) throw new Error('Fauna client is undefined')
  return client
    .query(
      faunaQuery.Create(faunaQuery.Ref('indexes'), {
        index,
        source: faunaQuery.Ref('classes/' + classes)
      })
    )
    .then(() => console.log('\x1b[34m%s\x1b[0m', 'Created index: ', index, 'on class: ', classes))
    .catch((e) => {
      if (consoleLog) console.log('\x1b[33m%s\x1b[0m', 'Error creating index: ', index, 'on class: ', classes)
    })
}

export default createIndexes
