import type { NextPage } from 'next'
import Seo from './Seo'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Seo />
      <main>
        <div className="grid">{children}</div>
      </main>
    </>
  )
}

export default Layout
