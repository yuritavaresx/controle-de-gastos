import { describe, it, expect } from "vitest";
import { descricaoCategoria, matrizCategoriaMes } from "./relatorio";
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