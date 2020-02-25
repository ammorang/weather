export function convertToFahrenheit(kelvinTemp: number) {
  const f = ((kelvinTemp * 9 / 5) - 459.67);

  return f;
}

export function convertToDate(date: string) {
  return new Date(date);
}