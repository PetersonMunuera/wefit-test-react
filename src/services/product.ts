import { api } from "./api"
import { ProductProps } from '~/types/Product'

export async function getProducts() {
  try {
    const { data: products } = await api.get<ProductProps[]>('/products')

    return products
  } catch (error) {
    throw new Error(`Erro ao buscar produtos: ${error}`);
  }
}