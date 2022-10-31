import { Client, query as faunaQuery } from 'faunadb'

import faunaClient from './faunaClient'

const deleteFaunaDocument = async (clientOrToken: Client | string, classes: string, id: string) => {
  let client: Client
  if (typeof clientOrToken === 'string') client = faunaClient(clientOrToken)
  else client = clientOrToken
  return client
    .query(faunaQuery.Delete(faunaQuery.Ref(`classes/${classes}/${id}`)))
    .then((response: any) => {
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

export default deleteFaunaDocument
