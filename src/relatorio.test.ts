import { describe, it, expect } from "vitest";
import { descricaoCategoria } from "./relatorio";

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