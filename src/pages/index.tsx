import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useCart } from '~/hooks/useCart'
import { getProducts } from '~/services/product'

import { ProductProps } from '~/types/Product'
import { CartItemsAmount } from '~/types/Home'

import { Loader } from '~/components/Loader'
import { ProductCard } from '~/components/ProductCard'

import S from '~/styles/home'

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount

    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    getProducts().then(response =>
      response && setProducts(response)
    )
  }, [])

  return (
    <>
      <Head>
        <title>Início</title>
      </Head>

      {!products.length ? (
        <Loader />
      ) : (
        <S.Container>
          {products.map(product =>
            <ProductCard
              key={product.id}
              product={{
                ...product,
                amount: cartItemsAmount[product.id] || 0
              }}
              handleAddProduct={addProduct}
            />
          )}
        </S.Container >
      )}
    </>
  )
}