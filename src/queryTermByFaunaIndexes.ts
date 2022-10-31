import { Client, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const queryTermByFaunaIndexes = async (clientOrToken: Client | string, indexes: string, term: string) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  return client
    .query(faunaQuery.Paginate(faunaQuery.Match(faunaQuery.Index(indexes), term)))
    .then((response: any) => {
      const resultsRefs = response.data
      console.log('activityLogs refs', resultsRefs)
      console.log(`${resultsRefs.length} activityLogs found`)

      const results = resultsRefs.map((ref: any) => {
        return faunaQuery.Get(ref)
      })

      return client.query(results).then((ret: any) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })
    })
    .catch((error: any) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}

export default queryTermByFaunaIndexes
