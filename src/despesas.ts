import type { Despesa } from "./tipos";

export function totalGasto(despesas: Despesa[]): number {
  let total = 0;
  for (const despesa of despesas) {
    total += despesa.valor;
  }
  return total;
}

export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
  let maior: Despesa | undefined = undefined;
  for (const despesa of despesas) {
    if (maior === undefined || despesa.valor > maior.valor) {
      maior = despesa;
    }
  }
  return maior;
}