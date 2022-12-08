import Link from 'next/link'
import Image from 'next/image'
import { FeedbackCardProps } from './types'
import S from './styles'

export function FeedbackCard({ img, text }: FeedbackCardProps) {
  return (
    <S.Container>
      <h1>{text}</h1>
      <Image {...img} priority />
      <Link href='/'>
        <button>Voltar</button>
      </Link>
    </S.Container>
  )
}