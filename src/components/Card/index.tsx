import { CardProps } from './types'

import S from './styles'

export function Card({ children }: CardProps) {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}