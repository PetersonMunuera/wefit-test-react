import { ReactNode } from "react"
import { CartProductProps } from "~/types/Product"

export type CartContextProps = {
  cart: CartProductProps[],
  addProduct: (productId: number) => Promise<void>,
  removeProduct: (productId: number) => void,
  updateProductAmount: (productId: number, amount: number) => void,
  resetCart: () => void
}

export type CartProviderProps = {
  children: ReactNode
}