import { toast } from 'react-toastify';

import { api } from "./api"
import { ProductProps } from '~/types/Product'

export async function getProducts() {
  try {
    const { data: products } = await api.get<ProductProps[]>('products')

    return products
  } catch (error) {
    toast.error('Erro ao buscar produtos')
  }
}

export async function findProduct(productId: number) {
  try {
    const { data: product } = await api.get<ProductProps>(`products/${productId}`)

    return product
  } catch (error) {
    toast.error('Erro ao buscar produtos')
  }
}