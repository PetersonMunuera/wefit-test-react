import { createContext, useContext, useState, useEffect } from "react"
import { CartContextProps, CartProviderProps, CartProductProps } from "./types"
import { toast } from "react-toastify"
import { api } from "~/services/api"

const CartContext = createContext<CartContextProps>({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProductProps[]>([])

  async function addProduct(productId: number) {
    try {
      let product = cart.find(product => product.id === productId)

      if (product) {
        updateProductAmount(productId, product.amount + 1)
      } else {
        const { data } = await api.get(`products/${productId}`)
        
        const newCart = [...cart, { ...data, amount: 1 }]
        setCart(newCart)

        toast.success('Produto adicionado ao carrinho')
      }
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