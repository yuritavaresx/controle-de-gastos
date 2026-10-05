import type { Despesa, Categoria } from "./tipos";

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

export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
  const resultado: Despesa[] = [];
  for (const despesa of despesas) {
    if (despesa.categoria === categoria) {
      resultado.push(despesa);
    }
  }
  return resultado;
}

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  throw new Error("não implementado");
}