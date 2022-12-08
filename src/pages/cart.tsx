import Head from 'next/head'
import { CartLayout } from '../components/layouts/Cart'

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>
      <CartLayout />
    </>
  )
}