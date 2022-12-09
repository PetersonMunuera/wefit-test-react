import Head from 'next/head'
import { useCart } from '~/hooks/useCart'
import { format } from '~/utils/currencyFormat'

import { FeedbackCard } from '~/components/FeedbackCard'
import { CartItems } from '~/components/CartItems'

import S from './style'
import { useRouter } from 'next/router'

export default function Cart() {
  const { cart, resetCart } = useCart()
  const router = useRouter()

  let totalPrice = 0
  cart.forEach(product => totalPrice += product.price * product.amount)

  function handleFinishOrder() {
    resetCart()
    router.replace('/order')
  }

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
            <button onClick={handleFinishOrder}>finalizar pedido</button>

          </S.FinishOrder>
        </S.CartCard>
      )}
    </>
  )
}