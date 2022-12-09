import Head from 'next/head'
import { ProductsList } from '~/components/ProductsList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <ProductsList />
    </>
  )
}