import { NextApiRequest, NextApiResponse } from 'next'
import { query as q } from 'faunadb'
import { faunaClient } from '../../../lib/faunaDB'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // console.log(res)
  switch (req.method) {
    case 'GET': {
      const slug: string = req.headers.referer?.split('/')[4]

      // console.log(req.headers.referer?.split('/')[4])

      const _res = await faunaClient.query(
        q.Select(['data'], q.Get(q.Match(q.Index('findid'), slug))),
      )

      // console.log(slug)
      return res.json({ _res })
    }

    case 'POST': {
      const body = JSON.parse(req.body)

      let query = await faunaClient.query(
        q.Update(
          q.Select(
            ['ref'],
            q.Get(q.Match(q.Index('shows_by_title'), body.title)),
          ),
          {
            data: {
              watched: body.watched,
            },
          },
        ),
      )
      return res.status(200).json({ data: query })
    }

    default: {
      return res.status(405).json({
        status: 'error',
        error: 'Method not allowed',
      })
    }
  }
}
