import Image from "next/image"
import { useEffect, useState } from "react"
import { useCart } from "~/hooks/useCart"
import { format } from '~/utils/currencyFormat'
import { sizes } from "~/styles/theme"

import S from './style'

export function CartItems() {
  const [screenWidth, setScreenWidth] = useState(() => screen.width)
  const { cart, updateProductAmount, removeProduct } = useCart()

  useEffect(() => {
    window.addEventListener('resize', () =>
      setScreenWidth(screen.width)
    )
  }, [])

  return (
    <S.List>
      {cart.map(product => (
        <li key={product.id}>
          <Image
            src={product.image}
            width={screenWidth >= sizes.tablet ? 90 : 64}
            height={screenWidth >= sizes.tablet ? 114 : 82}
            alt={product.title}
            priority
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

              <button onClick={() => removeProduct(product.id)}>
                <Image
                  src='/icons/trash.svg'
                  width={18}
                  height={18}
                  alt='Remover produto'
                />
              </button>
            </S.Price>
          </div>
        </li>
      ))}
    </S.List>
  )
}