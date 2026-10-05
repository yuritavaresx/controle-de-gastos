import type { Despesa } from "./tipos";
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto } from "./despesas";
import { formatarRelatorio } from "./relatorio";

// 8 despesas de exemplo: 4 categorias e 3 meses (1, 2 e 3)
const despesasIniciais: Despesa[] = [
  { id: "1", descricao: "Almoço", valor: 32.5, categoria: "alimentacao", mes: 1 },
  { id: "2", descricao: "Supermercado", valor: 210, categoria: "alimentacao", mes: 2 },
  { id: "3", descricao: "Passe mensal", valor: 120, categoria: "transporte", mes: 1 },
  { id: "4", descricao: "Uber", valor: 28.9, categoria: "transporte", mes: 3 },
  { id: "5", descricao: "Cinema", valor: 45, categoria: "lazer", mes: 2 },
  { id: "6", descricao: "Show", valor: 150, categoria: "lazer", mes: 3 },
  { id: "7", descricao: "Aluguel", valor: 900, categoria: "moradia", mes: 1 },
  { id: "8", descricao: "Condomínio", valor: 350, categoria: "moradia", mes: 2 },
];

// Adiciona uma despesa nova (devolve um array novo)
const jantar: Despesa = {
  id: "9",
  descricao: "Jantar fora",
  valor: 85,
  categoria: "alimentacao",
  mes: 3,
  observacao: "Aniversário de um amigo",
};
const comJantar = adicionarDespesa(despesasIniciais, jantar);

// Remove a despesa do Uber (devolve um array novo)
const despesas = removerDespesa(comJantar, "4");

console.log(`Despesas cadastradas: ${despesas.length}`);
console.log(`Despesas de alimentação: ${despesasDaCategoria(despesas, "alimentacao").length}`);
console.log(`Total gasto: R$ ${totalGasto(despesas).toFixed(2)}`);
console.log("");
console.log(formatarRelatorio(despesas));