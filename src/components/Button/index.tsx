import { ButtonProps } from "./types"
import S from './styles'

export function Button({ children }: ButtonProps) {
  return (
    <S.Button>
      {children}
    </S.Button>
  )
}