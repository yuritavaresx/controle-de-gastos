import { CATEGORIAS } from "./tipos";
import type { Categoria, Despesa } from "./tipos";
import { totalGasto, maiorDespesa } from "./despesas";

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
  const matriz = matrizCategoriaMes(despesas);
  const linhas: string[] = [];

  linhas.push("Relatório de gastos".toUpperCase());

  for (let i = 0; i < CATEGORIAS.length; i++) {
    let totalAno = 0;
    for (let mes = 0; mes < 12; mes++) {
      totalAno += matriz[i][mes];
    }
    const nome = descricaoCategoria(CATEGORIAS[i]);
    linhas.push(nome.padEnd(14) + totalAno.toFixed(2).padStart(10));
  }

  linhas.push("TOTAL GERAL".padEnd(14) + totalGasto(despesas).toFixed(2).padStart(10));

  const maior = maiorDespesa(despesas);
  if (maior === undefined) {
    linhas.push("MAIOR DESPESA: nenhuma");
  } else {
    linhas.push(`MAIOR DESPESA: ${maior.descricao} (R$ ${maior.valor.toFixed(2)})`);
  }

  return linhas.join("\n");
}