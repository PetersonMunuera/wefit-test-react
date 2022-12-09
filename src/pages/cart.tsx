import Head from 'next/head'
import { useCart } from '~/hooks/Cart/useCart'

import { FeedbackCard } from '~/components/FeedbackCard'
import { Card } from '~/components/Card'
import { CartItems } from '~/components/CartItems'

export default function Cart() {
  const { cart } = useCart()

  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>

      {!cart.length ? (
        <FeedbackCard
          text="Parece que não há nada por aqui :("
          img={{
            src: '/images/empty-cart.svg',
            width: 447,
            height: 266,
            alt: 'Carrinho vazio'
          }} />
      ) : (
        <Card>
          <CartItems />
        </Card>
      )}
    </>
  )
}