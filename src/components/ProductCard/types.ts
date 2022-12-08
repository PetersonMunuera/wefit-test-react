import { ProductProps } from "~/types/Product"

export type ProductCardProps = {
  product: ProductProps,
  amount: number,
  handleAddProduct: (productId: number) => void
}