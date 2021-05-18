export function copCurrencyToString (value) {
  return new Intl
    .NumberFormat("es-CO", { style: "currency", currency: "COP" })
    .format(value);
}
