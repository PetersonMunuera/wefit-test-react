import Image from 'next/image'
import { ProductCardProps } from './types'
import { format } from '~/utils/currencyFormat'

import S from './styles'

export function ProductCard({ product, amount, handleAddProduct }: ProductCardProps) {
  return (
    <S.Container>
      <img src={product.image} width={147} height={188} alt={product.title} />
      <h1>{product.title}</h1>
      <strong>{format(product.price)}</strong>
      <S.AddButton
        disabled={!!amount}
        onClick={() => handleAddProduct(product.id)}
      >
        <div>
          <Image
            src='/icons/add-cart.svg'
            width={14}
            height={14}
            alt='Adicionar'
          />
          {amount}
        </div>
        <strong>
          {!amount ? 'adicionar ao carrinho' : 'item adicionado'}
        </strong>
      </S.AddButton>
    </S.Container>
  )
}