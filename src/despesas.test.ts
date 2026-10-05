import { describe, it, expect } from "vitest";
import { totalGasto, maiorDespesa } from "./despesas";
import type { Despesa } from "./tipos";

describe("totalGasto", () => {
  it("soma os valores de várias despesas", () => {
    const despesas: Despesa[] = [
      { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
      { id: "2", descricao: "Ônibus", valor: 10, categoria: "transporte", mes: 1 },
    ];
    expect(totalGasto(despesas)).toBe(40);
  });

  it("retorna 0 para lista vazia", () => {
    expect(totalGasto([])).toBe(0);
  });
});

describe("maiorDespesa", () => {
  it("retorna a despesa de maior valor", () => {
    const despesas: Despesa[] = [
      { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
      { id: "2", descricao: "Aluguel", valor: 800, categoria: "moradia", mes: 1 },
      { id: "3", descricao: "Cinema", valor: 25, categoria: "lazer", mes: 2 },
    ];
    expect(maiorDespesa(despesas)).toEqual(despesas[1]);
  });

  it("retorna undefined para lista vazia", () => {
    expect(maiorDespesa([])).toBeUndefined();
  });
});