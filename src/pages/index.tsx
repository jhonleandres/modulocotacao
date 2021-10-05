import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="">
      <Link href="/cotacao/a">
        <a>Acesso cotação</a>
      </Link>
    </div>
  )
}

export default Home
