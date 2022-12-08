import Link from "next/link"

export function CartLayout() {
  return (
    <>
      <h1>Cart</h1>
      <Link href='/order'>finalizar pedido</Link>
    </>
  )
}