import { Client, ExprArg, FaunaHttpErrorResponseContent, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const queryAllByFaunaIndexes = async (clientOrToken: Client | string, indexes: string, consoleLog = false as boolean) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  if (client === undefined) throw new Error('Fauna client is undefined')
  return client
    .query(faunaQuery.Paginate(faunaQuery.Match(faunaQuery.Ref('indexes/' + indexes))))
    .then((response: any) => {
      const resultsRefs = response.data
      if (consoleLog) console.log('refs', resultsRefs, `${resultsRefs.length} refs found`)

      const results = resultsRefs.map((ref: ExprArg) => {
        return faunaQuery.Get(ref)
      })

      return client.query(results).then((ret: object) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    })
    .catch((error: FaunaHttpErrorResponseContent) => {
      if (consoleLog) console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}

export default queryAllByFaunaIndexes
