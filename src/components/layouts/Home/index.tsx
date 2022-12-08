import { useState, useEffect } from 'react'
import { ProductProps } from '~/types/Product'
import { getProducts } from '~/services/product'
import { Loader } from '../../Loader'
import { ProductsList } from '~/components/ProductsList'

export function HomeLayout() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    getProducts()
    .then(response => response && setProducts(response))
  }, [])

  return (
    !products.length
      ? <Loader />
      : <ProductsList products={products} />
  )
}
