import Head from "next/head"
import { OrderLayout } from "../components/layouts/Order"

export default function Order() {
  return (
    <>
      <Head>
        <title>Compra concluída</title>
      </Head>
      <OrderLayout />
    </>
  )
}