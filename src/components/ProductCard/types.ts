import { CartProductProps } from "~/types/Product"

export type ProductCardProps = {
  product: CartProductProps,
  handleAddProduct: (productId: number) => void
}