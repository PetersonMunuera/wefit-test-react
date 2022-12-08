import { ReactNode } from "react"
import { ProductProps } from "~/types/Product"

export interface CartProductProps extends ProductProps {
  amount: number
}

export type CartContextProps = {
  cart: CartProductProps[],
  addProduct: (productId: number) => Promise<void>,
  removeProduct: (productId: number) => void,
  updateProductAmount: (productId: number, amount: number) => void
}

export type CartProviderProps = {
  children: ReactNode
}