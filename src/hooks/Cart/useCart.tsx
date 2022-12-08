import { createContext, useContext, useState } from "react"
import { findProduct } from "~/services/product"
import { toast } from "react-toastify"

import { CartContextProps, CartProviderProps } from "./types"
import { CartProductProps } from "~/types/Product"

const CartContext = createContext<CartContextProps>({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProductProps[]>([])

  async function addProduct(productId: number) {
    try {
      const data = await findProduct(productId)

      if (!data) return

      const newCart = [...cart, { ...data, amount: 1 }]
      setCart(newCart)

      toast.success('Produto adicionado ao carrinho')
    } catch (error) {
      toast.error('Erro ao adicionar produto no carrinho')
    }
  }

  function removeProduct(productId: number) {

  }

  function updateProductAmount(productId: number, amount: number) {
    if (amount <= 0) return

    const product = cart.find(product => product.id === productId)

    if (product) {
      const newCart = [...cart]

      newCart.forEach(product => {
        if (product.id === productId) {
          product.amount = amount
        }
      })

      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}