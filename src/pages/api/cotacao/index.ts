import { NextApiRequest, NextApiResponse } from 'next'
import { Collection, query as q } from 'faunadb'
import { v4 as uuidv4 } from 'uuid'
import { faunaClient } from '../../../lib/faunaDB'

export default async function CotacaoHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // console.log(res)
  switch (req.method) {
    case 'GET': {
      const _res = await faunaClient.query(
        q.Select(
          ['data'],
          q.Get(
            q.Match(q.Index('findid'), 'df18e97e-a9c6-4901-8112-015b75623fbd'),
          ),
        ),
      )
      return res.json({ _res })
    }

    case 'POST': {
      const body = req.body
      const data = body.map((i: string[]) => ({ id: uuidv4(), ...i }))
      console.log(data[0]._DATA)
      data.map(
        async (data: any) =>
          await faunaClient.query(
            q.Create(q.Collection('fornecedores'), {
              data,
            }),
          ),
      )
      return res.status(200).json({ data })
    }

    default: {
      return res.status(405).json({
        status: 'error',
        error: 'Method not allowed',
      })
    }
  }
}
