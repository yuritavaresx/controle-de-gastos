import { CATEGORIAS } from "./tipos";
import type { Categoria, Despesa } from "./tipos";

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "alimentacao":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "lazer":
      return "Lazer";
    case "moradia":
      return "Moradia";
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let mes = 0; mes < 12; mes++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  for (const despesa of despesas) {
    for (let i = 0; i < CATEGORIAS.length; i++) {
      if (CATEGORIAS[i] === despesa.categoria) {
        matriz[i][despesa.mes - 1] += despesa.valor;
      }
    }
  }

  return matriz;
}

export function formatarRelatorio(despesas: Despesa[]): string {
  throw new Error("não implementado");
}