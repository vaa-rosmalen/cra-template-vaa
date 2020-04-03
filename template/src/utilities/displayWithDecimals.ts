export const displayWithDecimals = (decimals: number) => (value: number) => {
  if (isNaN(value)) return value;
  return value.toLocaleString("nl-NL", { minimumFractionDigits: decimals });
};
