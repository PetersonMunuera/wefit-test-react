import Image from "next/image"
import { useCart } from "~/hooks/Cart/useCart"
import { format } from '~/utils/currencyFormat'

import S from './style'

export function CartItems() {
  const { cart, updateProductAmount, removeProduct } = useCart()

  return (
    <S.List>
      {cart.map(product => (
        <li key={product.id}>
          <Image
            src={product.image}
            width={64}
            height={82}
            alt={product.title}
          />

          <div>
            <S.Info>
              <h1>{product.title}</h1>
              <div>
                <strong>{format(product.price)}</strong>

                <button onClick={() => removeProduct(product.id)}>
                  <Image
                    src='/icons/trash.svg'
                    width={18}
                    height={18}
                    alt='Remover produto'
                  />
                </button>
              </div>
            </S.Info>

            <S.Price>
              <S.AmountHandler>
                <button onClick={() => updateProductAmount(product.id, product.amount - 1)}>
                  <Image src='/icons/minus.svg' width={18} height={18} alt='Remover produto' />
                </button>
                <span>{product.amount}</span>
                <button onClick={() => updateProductAmount(product.id, product.amount + 1)}>
                  <Image src='/icons/plus.svg' width={18} height={18} alt='Adicionar produto' />
                </button>
              </S.AmountHandler>

              <S.Subtotal>
                <h2>subtotal</h2>
                <strong>
                  {format(product.price * product.amount)}
                </strong>
              </S.Subtotal>
            </S.Price>
          </div>
        </li>
      ))}
    </S.List>
  )
}