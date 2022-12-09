import Head from "next/head"
import { FeedbackCard } from "~/components/FeedbackCard"

export default function Order() {
  return (
    <>
      <Head>
        <title>Compra concluída</title>
      </Head>
      <FeedbackCard
        text="Compra realizada com sucesso!"
        img={{
          src: '/images/order-complete.svg',
          width: 295,
          height: 307,
          alt: 'Compra concluída'
        }}
      />
    </>
  )
}