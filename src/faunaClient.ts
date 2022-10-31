import { Client } from 'faunadb'

const faunaClient = (secret: string, domain = 'db.us.fauna.com' as string, scheme = 'https' as 'https' | 'http' | undefined): Client => {
  return new Client({
    secret,
    keepAlive: false,
    queryTimeout: 2000,
    timeout: 30,
    http2SessionIdleTime: 1000,
    domain,
    scheme
  })
}

export default faunaClient
