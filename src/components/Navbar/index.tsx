import Link from "next/link"
import Image from "next/image"
import { useCart } from "~/hooks/useCart"

import S from "./styles"

export function Navbar() {
  const { cart } = useCart()

  return (
    <S.Container>
      <Link href='/'>
        <strong>WeMovies</strong>
      </Link>

      <Link href='/cart'>
        <S.CartButton>
          <div>
            <span>Meu Carrinho</span>
            <span>
              {cart.length}
              {cart.length === 1 ? ' item' : ' itens'}
            </span>
          </div>
          <Image
            src='/icons/cart.svg'
            width={32}
            height={32}
            alt='Carrinho'
          />
        </S.CartButton>
      </Link>
    </S.Container>
  )
}