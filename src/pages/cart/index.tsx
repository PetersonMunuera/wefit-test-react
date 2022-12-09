import Head from 'next/head'
import { useCart } from '~/hooks/Cart/useCart'
import { format } from '~/utils/currencyFormat'

import { FeedbackCard } from '~/components/FeedbackCard'
import { CartItems } from '~/components/CartItems'

import S from './style'
import Link from 'next/link'

export default function Cart() {
  const { cart } = useCart()

  let totalPrice = 0
  cart.forEach(product => totalPrice += product.price * product.amount)

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
        <S.CartCard>
          <CartItems />
          <S.FinishOrder>
            <div>
              <span>total</span>
              <strong>{format(totalPrice)}</strong>
            </div>
            <Link href='/order'>
              <button>finalizar pedido</button>
            </Link>
          </S.FinishOrder>
        </S.CartCard>
      )}
    </>
  )
}