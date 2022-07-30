export function formatCurrencyToBr(valor: number) {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(valor)
}
