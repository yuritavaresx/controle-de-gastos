
// Union type para representar as categorias de despesas
export type Categoria = "alimentacao" | "transporte" | "lazer" | "moradia";

export interface Despesa {
  readonly id: string;          // readonly porque o id nunca pode mudar depois que a despesa é criada
  descricao: string;
  valor: number;             // porque esse campo se trata de um valor monetário, que é um número
  categoria: Categoria;
  mes: number;                // de 1 a 12
  observacao?: string;   // pode ter observação ou não, por isso o ponto de interrogação
}

// Ordem usada nas linhas da matriz do relatório
export const CATEGORIAS: Categoria[] = ["alimentacao", "transporte", "lazer", "moradia"];