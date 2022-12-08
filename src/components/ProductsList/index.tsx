import { ProductsListProps } from "./types"

export function ProductsList({ products }: ProductsListProps) {
  return (
    <ul>
      {products.map(product =>
        <li key={product.id}>
          {product.title} - 
          {product.price}
        </li>
      )}
    </ul>
  )
}