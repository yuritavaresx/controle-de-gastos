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
  if (nova.valor <= 0) {
    throw new Error("valor deve ser maior que zero");
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("mes deve estar entre 1 e 12");
  }
  return [...despesas, nova];
}

export function removerDespesa(despesas: Despesa[], id: string): Despesa[] {
  const resultado: Despesa[] = [];
  for (const despesa of despesas) {
    if (despesa.id !== id) {
      resultado.push(despesa);
    }
  }
  return resultado;
}