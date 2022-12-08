import Link from "next/link"
import { useCart } from "~/hooks/Cart/useCart"
import { FeedbackCard } from "~/components/FeedbackCard"

import S from './styles'

export function CartLayout() {
  const { cart } = useCart()

  return !cart.length ? (
    <FeedbackCard 
      text="Parece que não há nada por aqui :("
      img={{
        src: '/images/empty-cart-2.svg', 
        width: 447, 
        height: 266,
        alt: 'Carrinho vazio' 
      }}
    />
  ) : (
    <S.Container>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.title} - {product.amount}
          </li>
        ))}
      </ul>
      <Link href='/order'>finalizar pedido</Link>
    </S.Container>
  )
}