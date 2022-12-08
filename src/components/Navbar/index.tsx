import Link from "next/link"
import Image from "next/image"

import S from "./styles"

export function Navbar() {
  return (
    <S.Container>
      <Link href='/'>
        <span>WeMovies</span>
      </Link>

      <Link href='/cart'>
        <S.CartButton>
          <div>
            <span>Meu Carrinho</span>
            <span>0 itens</span>
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