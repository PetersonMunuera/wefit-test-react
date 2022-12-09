import Image from "next/image"
import { useCart } from "~/hooks/Cart/useCart"
import { format } from '~/utils/currencyFormat'

import S from './style'

export function CartItems() {
  const { cart, updateProductAmount, removeProduct } = useCart()

  return (
    <S.Table>
      <tr>
        <th>produto</th>
        <th>qtd</th>
        <th>subtotal</th>
      </tr>
      {cart.map(product => (
        <tr key={product.id}>
          <td>
            <Image
              src={product.image}
              width={90}
              height={114}
              alt={product.title}
            />

            <div>
              <h1>{product.title}</h1>
              <span>R$ 29,90</span>
            </div>
          </td>

          <td>
            <button onClick={() => updateProductAmount(product.id, product.amount - 1)}>-</button>
            {product.amount}
            <button onClick={() => updateProductAmount(product.id, product.amount + 1)}>+</button>
          </td>

          <td>
            <span>
              {format(product.price * product.amount)}
            </span>
          </td>

          <td>
            <button onClick={() => removeProduct(product.id)}>
              <Image
                src='/icons/trash.svg'
                width={18}
                height={18}
                alt='Remover produto'
              />
            </button>
          </td>
        </tr>
      ))}
    </S.Table>
  )
}