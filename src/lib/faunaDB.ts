import faunadb from 'faunadb'

export const faunaClient = new faunadb.Client({
  secret: String(process.env.NEXT_PUBLIC_FAUNA_SECRET),
  domain: 'db.eu.fauna.com',
  port: 443,
  scheme: 'https',
})
