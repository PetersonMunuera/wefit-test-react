import Link from "next/link"

export default function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <Link href='/order/complete'>finalizar pedido</Link>
    </>
  )
}