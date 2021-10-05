import useSWR from 'swr'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Table: NextPage = () => {
  const [data, setData] = useState([])
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { slug } = router.query

  useEffect(() => {
    const { slug } = router.query
    fetch(`/api/cotacao/` + slug)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Erro!'

  return (
    <>
      {/* <pre>{JSON.stringify(data, null)}</pre> */}
      {/* <pre>{JSON.stringify(router, null)}</pre> */}

      <main className="bg-white-500 flex-1 p-3 overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
            <div className="mb-2 border-solid border-grey-light rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
              <div className="bg-gray-300 px-2 py-3 border-solid border-gray-400 border-b">
                Empresa
              </div>
              <div className="p-3">
                <table className="table-fixed">
                  {/* <thead>
                    <tr>
                      <th className="border w-1/2 px-4 py-2">Title</th>
                      <th className="border w-1/4 px-4 py-2">Author</th>
                      <th className="border w-1/4 px-4 py-2">Views</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Intro to CSS</td>
                      <td className="border px-4 py-2">Adam</td>
                      <td className="border px-4 py-2">858</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-2 md:mx-2 lg:mx-2 border-solid border-gray-200 rounded border shadow-sm w-full md:w-1/2 lg:w-1/2">
              <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                Fornecedor
              </div>
              <div className="p-3">
                <table className="table-fixed">
                  {/* <thead>
                    <tr>
                      <th className="border-b bg-black text-white w-1/2 px-4 py-2">
                        Title
                      </th>
                      <th className="border-b bg-black text-white w-1/4 px-4 py-2">
                        Author
                      </th>
                      <th className="border-b bg-black text-white w-1/4 px-4 py-2">
                        Views
                      </th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Intro to CSS</td>
                      <td className="border px-4 py-2">Adam</td>
                      <td className="border px-4 py-2">858</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
            <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
              <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                Produtos
              </div>
              <div className="p-3">
                <table className="table-responsive w-full rounded">
                  <thead>
                    <tr>
                      <th className="border w-1/12 px-2 py-2">Codigo</th>
                      <th className="border w-1/12 px-2 py-2">Cod. Original</th>
                      <th className="border w-1/12 px-2 py-2">Cod. Fabrica</th>
                      <th className="border w-1/2 px-4 py-2">Desc.</th>
                      <th className="border w-1/12 px-4 py-2">Un.</th>
                      <th className="border w-1/12 px-4 py-2">Emb.</th>
                      <th className="border w-1/5 px-4 py-2">Qtd</th>
                      <th className="border w-1/5 px-4 py-2">Preço Unitario</th>
                      <th className="border w-1/5 px-4 py-2">IPI</th>
                      <th className="border w-1/5 px-4 py-2">ICMS</th>
                      <th className="border w-1/5 px-4 py-2">Vlr ST</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px- py-2">10</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">
                        aaaaaaaaaaaaaaaaaaaaa
                      </td>
                      <td className="border px-4 py-2">MS</td>
                      <td className="border px-4 py-2">MS</td>
                      <td className="border px-4 py-2">MS</td>
                      <td className="border px-4 py-2">MS</td>
                      <td className="border px-4 py-2">900 $</td>
                      <td className="border px-4 py-2">
                        <i className="fas fa-check text-green-500 mx-2"></i>
                      </td>
                      <td className="border px-4 py-2">
                        <a className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                          <i className="fas fa-eye"></i>
                        </a>
                        <a className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                          <i className="fas fa-edit"></i>
                        </a>
                        <a className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                          <i className="fas fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Table
