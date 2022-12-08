export type ProductProps = {
  id: number,
  title: string,
  price: number,
  image: string
}
export interface CartProductProps extends ProductProps {
  amount: number
}