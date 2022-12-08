import { FeedbackCard } from "~/components/FeedbackCard"

export function OrderLayout() {
  return (
    <FeedbackCard 
      text="Compra realizada com sucesso!"
      img={{
        src: '/images/order-complete.svg', 
        width: 295, 
        height: 307, 
        alt: 'Compra concluída' 
      }}
    />
  )
}