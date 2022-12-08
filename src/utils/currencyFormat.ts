export function format(number: number) {
  return new Intl.NumberFormat('pt-BR', { 
    currency: 'BRL',
    style: 'currency'
  }).format(number)
}