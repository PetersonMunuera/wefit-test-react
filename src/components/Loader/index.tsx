import S from './styles'

export function Loader() {
  return (
    <S.Container>
      <S.SpinnerIcon 
        src='/icons/spinner.png' 
        width={62} 
        height={62}
        priority
        alt="Carregando" 
      />
    </S.Container>
  )
}