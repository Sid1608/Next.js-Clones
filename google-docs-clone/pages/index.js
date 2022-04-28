import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      </div>
  )
}

export default Home
