export const roundToDecimals = (decimals: number) => (value: number) => {
  if (isNaN(value)) return value;
  return (
    Math.round((value + Number.EPSILON) * Math.pow(10, decimals)) /
    Math.pow(10, decimals)
  );
};
