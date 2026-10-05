import { describe, it, expect } from "vitest";
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from "./relatorio";
import type { Despesa } from "./tipos";

describe("descricaoCategoria", () => {
  it("retorna o nome de exibição de alimentação", () => {
    expect(descricaoCategoria("alimentacao")).toBe("Alimentação");
  });

  it("retorna o nome de exibição de transporte", () => {
    expect(descricaoCategoria("transporte")).toBe("Transporte");
  });

  it("retorna o nome de exibição de lazer", () => {
    expect(descricaoCategoria("lazer")).toBe("Lazer");
  });

  it("retorna o nome de exibição de moradia", () => {
    expect(descricaoCategoria("moradia")).toBe("Moradia");
  });
});


describe("matrizCategoriaMes", () => {
  it("tem uma linha por categoria e 12 colunas", () => {
    const matriz = matrizCategoriaMes([]);
    expect(matriz).toHaveLength(4);
    expect(matriz[0]).toHaveLength(12);
  });

  it("soma os valores na categoria e mês certos", () => {
    const despesas: Despesa[] = [
      { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
      { id: "2", descricao: "Jantar", valor: 45, categoria: "alimentacao", mes: 1 },
      { id: "3", descricao: "Ônibus", valor: 10, categoria: "transporte", mes: 3 },
    ];
    const matriz = matrizCategoriaMes(despesas);
    expect(matriz[0][0]).toBe(75);
    expect(matriz[1][2]).toBe(10);
    expect(matriz[2][5]).toBe(0);
  });
});


describe("formatarRelatorio", () => {
  const despesasExemplo: Despesa[] = [
    { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
    { id: "2", descricao: "Jantar", valor: 45, categoria: "alimentacao", mes: 1 },
    { id: "3", descricao: "Ônibus", valor: 10, categoria: "transporte", mes: 3 },
    { id: "4", descricao: "Aluguel", valor: 800, categoria: "moradia", mes: 1 },
  ];

  it("escreve o título em maiúsculas na primeira linha", () => {
    const linhas = formatarRelatorio(despesasExemplo).split("\n");
    expect(linhas[0]).toBe("RELATÓRIO DE GASTOS");
  });

  it("mostra uma linha por categoria com o total do ano", () => {
    const texto = formatarRelatorio(despesasExemplo);
    expect(texto).toContain("Alimentação");
    expect(texto).toContain("75.00");
    expect(texto).toContain("Transporte");
    expect(texto).toContain("10.00");
    expect(texto).toContain("Lazer");
    expect(texto).toContain("Moradia");
    expect(texto).toContain("800.00");
  });

  it("mostra o total geral e a maior despesa no final", () => {
    const texto = formatarRelatorio(despesasExemplo);
    expect(texto).toContain("885.00");
    expect(texto).toContain("MAIOR DESPESA: Aluguel (R$ 800.00)");
  });

  it("alinha as colunas: categorias e total têm o mesmo tamanho de linha", () => {
    const linhas = formatarRelatorio(despesasExemplo).split("\n");
    const tamanho = linhas[1].length;
    for (let i = 1; i <= 5; i++) {
      expect(linhas[i]).toHaveLength(tamanho);
    }
  });

  it("funciona com lista vazia (totais em 0.00 e nenhuma maior despesa)", () => {
    const texto = formatarRelatorio([]);
    expect(texto).toContain("TOTAL GERAL");
    expect(texto).toContain("0.00");
    expect(texto).toContain("MAIOR DESPESA: nenhuma");
  });
});