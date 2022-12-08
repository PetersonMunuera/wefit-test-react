import { useState, useEffect } from 'react'
import { useCart } from '~/hooks/Cart/useCart'
import { getProducts } from '~/services/product'

import { ProductProps } from '~/types/Product'
import { CartItemsAmount } from './types'

import { Loader } from '~/components/Loader'
import { ProductCard } from '~/components/ProductCard'

import S from './styles'

export function ProductsList() {
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

  if (!products.length) return <Loader />

  return (
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
    </S.Container>
  )
}