import { useState, useEffect } from 'react'
import { ProductProps } from '~/types/Product'
import { getProducts } from '~/services/product'
import { Loader } from '~/components/Loader'
import { ProductCard } from '~/components/ProductCard'

import S from './styles'

export function ProductsList() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    getProducts()
      .then(response => response && setProducts(response))
  }, [])

  if (!products.length) return <Loader />

  return (
    <S.Container>
      {products.map(product =>
        <ProductCard key={product.id} product={product} />
      )}
    </S.Container>
  )
}