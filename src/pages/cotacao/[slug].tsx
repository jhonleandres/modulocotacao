import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Table from '../../components/Table'

const Cotacao: NextPage = () => {
  const router = useRouter()

  const { slug } = router.query

  return (
    <>
      <Layout>
        {/* <pre>{JSON.stringify(slug)}</pre> */}
        <Table />
      </Layout>
    </>
  )
}

export default Cotacao
