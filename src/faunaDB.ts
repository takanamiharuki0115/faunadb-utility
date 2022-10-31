import { Client, query as faunaQuery } from 'faunadb'

if (!process.env.FAUNADB_SERVER_SECRET) throw new Error('No FAUNADB_SERVER_SECRET in .env.development file')

const { FAUNADB_SERVER_SECRET } = process.env

const faunaClient = new Client({
    secret: FAUNADB_SERVER_SECRET,
    keepAlive: false,
    queryTimeout: 2000,
    timeout: 30,
    http2SessionIdleTime: 1000,
    domain: 'db.us.fauna.com',
    scheme: 'https'
})

const createFaunaDocument = async (classes, data) => {
    return await faunaClient
        .query(
            faunaQuery.Create(
                faunaQuery.Ref(
                    'classes/' + classes
                ),
                {
                    data: data
                }
            )
        )
        .then(async (response) => {
            console.log('success', response)
            return {
              statusCode: 200,
              body: JSON.stringify(response)
            }
        })
        .catch((error) => {
            console.log('error', error)
            return {
              statusCode: 400,
              body: JSON.stringify(error)
            }
        })
}

const updateFaunaDocument = async (classes, id, data) => {
    return await faunaClient
        .query(
            faunaQuery.Update(
                faunaQuery.Ref(
                    `classes/${classes}/${id}`
                ),
                { data }
            )
        )
        .then((response) => {
            console.log('success', response)
            return {
                statusCode: 200,
                body: JSON.stringify(response)
            }
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        })
}

const deleteFaunaDocument = async (classes, id) => {
    return await faunaClient
        .query(
            faunaQuery.Delete(
                faunaQuery.Ref(
                    `classes/${classes}/${id}`
                )
            )
        )
        .then((response) => {
            console.log('success', response)
            return {
                statusCode: 200,
                body: JSON.stringify(response)
            }
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        })
}

const queryAllByFaunaIndexes = async (indexes) => {
    return await faunaClient
        .query(
            faunaQuery.Paginate(
                faunaQuery.Match(
                    faunaQuery.Ref('indexes/' + indexes)
                )
            )
        )
        .then((response) => {
            const resultsRefs = response.data
            console.log('refs', resultsRefs)
            console.log(`${resultsRefs.length} refs found`)

            const results = resultsRefs.map((ref) => {
                return faunaQuery.Get(ref)
            })

            return faunaClient.query(results).then((ret) => {
                return {
                statusCode: 200,
                body: JSON.stringify(ret)
                }
            })
        })
        .catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        })
}

const queryTermByFaunaIndexes = async (indexes, term) => {
    return await faunaClient
    .query(
        faunaQuery.Paginate(
            faunaQuery.Match(
                faunaQuery.Index(indexes),
                term
            )
        )
    )
    .then((response) => {
        const resultsRefs = response.data
        console.log('activityLogs refs', resultsRefs)
        console.log(`${resultsRefs.length} activityLogs found`)

        const results = resultsRefs.map((ref) => {
            return faunaQuery.Get(ref)
        })

        return faunaClient.query(results).then((ret) => {
            return {
                statusCode: 200,
                body: JSON.stringify(ret)
            }
        })
    })
    .catch((error) => {
        console.log('error', error)
        return {
            statusCode: 400,
            body: JSON.stringify(error)
        }
    })
}

export {
    faunaClient,
    faunaQuery,
    createFaunaDocument,
    updateFaunaDocument,
    deleteFaunaDocument,
    queryAllByFaunaIndexes,
    queryTermByFaunaIndexes
}