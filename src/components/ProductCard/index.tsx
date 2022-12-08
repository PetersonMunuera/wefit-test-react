import Image from 'next/image'
import { ProductCardProps } from './types'
import { format } from '~/utils/currencyFormat'

import S from './styles'

export function ProductCard({ product }: ProductCardProps) {
  return (
    <S.Container>
      <img src={product.image} width={147} height={188} alt={product.title} />
      <h1>{product.title}</h1>
      <strong>{format(product.price)}</strong>
      <S.Button>
        <div>
          <Image
            src='/icons/add-cart.svg'
            width={14}
            height={14}
            alt='Adicionar'
          />
          0
        </div>
        adicionar ao carrinho
      </S.Button>
    </S.Container>
  )
}