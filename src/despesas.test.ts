import { describe, it, expect } from "vitest";
import { totalGasto, maiorDespesa, despesasDaCategoria, adicionarDespesa } from "./despesas";
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

describe("despesasDaCategoria", () => {
  it("retorna só as despesas da categoria pedida", () => {
    const despesas: Despesa[] = [
      { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
      { id: "2", descricao: "Ônibus", valor: 10, categoria: "transporte", mes: 1 },
      { id: "3", descricao: "Jantar", valor: 45, categoria: "alimentacao", mes: 2 },
    ];
    expect(despesasDaCategoria(despesas, "alimentacao")).toEqual([despesas[0], despesas[2]]);
  });

  it("retorna lista vazia quando não há despesas da categoria", () => {
    const despesas: Despesa[] = [
      { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
    ];
    expect(despesasDaCategoria(despesas, "lazer")).toEqual([]);
  });
});


describe("adicionarDespesa", () => {
  it("retorna um novo array com a despesa adicionada", () => {
    const despesas: Despesa[] = [
      { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
    ];
    const nova: Despesa = { id: "2", descricao: "Ônibus", valor: 10, categoria: "transporte", mes: 1 };
    expect(adicionarDespesa(despesas, nova)).toEqual([despesas[0], nova]);
  });

  it("não altera o array original", () => {
    // ESCREVA AQUI UMA FRASE: por que a função não pode alterar o array recebido?
    const despesas: Despesa[] = [
      { id: "1", descricao: "Almoço", valor: 30, categoria: "alimentacao", mes: 1 },
    ];
    const nova: Despesa = { id: "2", descricao: "Ônibus", valor: 10, categoria: "transporte", mes: 1 };
    adicionarDespesa(despesas, nova);
    expect(despesas).toHaveLength(1);
  });

  it("lança erro se o valor for zero", () => {
    const invalida: Despesa = { id: "3", descricao: "Teste", valor: 0, categoria: "lazer", mes: 1 };
    expect(() => adicionarDespesa([], invalida)).toThrow("valor");
  });

  it("lança erro se o mês for maior que 12", () => {
    const invalida: Despesa = { id: "4", descricao: "Teste", valor: 10, categoria: "lazer", mes: 13 };
    expect(() => adicionarDespesa([], invalida)).toThrow("mes");
  });
});