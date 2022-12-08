import { useState, useEffect } from 'react'
import { ProductProps } from '~/types/Product'
import { getProducts } from '~/services/product'
import { Loader } from '../../Loader'

export function HomeLayout() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    getProducts().then(response => setProducts(response))
  }, [])

  return (
    !products.length
    ? <Loader />
    : products.map(product => (
      <div key={product.id}>
        {product.title}
      </div>
    ))
  )
}
