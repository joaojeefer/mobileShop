export const intlCurrencyFormat = (value?: number): string => {
  if (!value) {
    return '';
  }

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
