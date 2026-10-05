# Controle de Gastos do Mês

Módulo TypeScript que registra despesas de um mês e gera um relatório por categoria. Projeto individual de Linguagem de Programação I (FATEC ADS).

## Como instalar, testar e rodar

```
npm install        # instala as dependências
npm test           # roda os testes uma vez (Vitest)
npm run dev        # roda o src/index.ts e imprime o relatório
npx tsc --noEmit   # confere os tipos sem gerar arquivos
```

Requisito: Node.js (versão LTS).

## Arquivos de configuração

- **package.json**: descreve o projeto, lista as dependências de desenvolvimento (typescript, @types/node, tsx, vitest) e define os scripts `test` e `dev`.
- **package-lock.json**: gerado pelo npm; trava as versões exatas instaladas para que qualquer pessoa instale o mesmo.
- **tsconfig.json**: configura o TypeScript com `strict: true` (checagens rígidas de tipo) e `noEmit` (só verifica, não gera arquivos); `include` limita a checagem à pasta `src`.
- **.gitignore**: impede que `node_modules/` e `dist/` sejam enviados ao GitHub, porque são pesados e podem ser recriados.
- **Config do Vitest**: não há arquivo próprio; uso o padrão do Vitest, que já encontra os arquivos `*.test.ts`. O script `vitest run` roda uma vez e sai, sem modo watch.

## Estrutura

- `src/tipos.ts`: tipos `Categoria` e `Despesa` e o array `CATEGORIAS`.
- `src/despesas.ts`: funções de despesas (adicionar, remover, filtrar, total, maior).
- `src/relatorio.ts`: nome das categorias, matriz categoria × mês e texto do relatório.
- `src/index.ts`: programa principal com despesas de exemplo.

## Registro de uso de IA

Fluxo seguido em cada função: escrevi a assinatura e os testes, vi os testes falharem, fiz commit dos testes, pedi à IA só a implementação, rodei os testes e li o código antes de aceitar.

| Função | O que pedi à IA | Aceitei ou ajustei? | Por quê |
|---|---|---|---|
| totalGasto | Implementar a soma dos valores | Aceitei como veio | Soma qualquer lista, devolve 0 para lista vazia e não altera o array |
| maiorDespesa | Implementar a busca da maior despesa | Aceitei como veio | Usa `undefined` para lista vazia; em empate devolve a primeira (testado) |
| despesasDaCategoria | Implementar o filtro por categoria | Aceitei como veio | Copia para um array novo só as despesas da categoria |
| adicionarDespesa | Implementar com validação de valor e mês | Aceitei como veio | Valida e usa spread (`[...despesas, nova]`) para não alterar o original |
| removerDespesa | Implementar a remoção por id | Aceitei como veio | Copia as despesas com id diferente; id inexistente gera cópia igual |
| descricaoCategoria | Implementar com `switch` | Aceitei como veio | Cobre as 4 categorias; sem `default`, o union type garante a cobertura |
| matrizCategoriaMes | Implementar a matriz só com laços `for` | Aceitei como veio | Monta a matriz zerada e soma na célula `[categoria][mes - 1]` |
| formatarRelatorio | Implementar o texto do relatório | Aceitei como veio | Reaproveita as outras funções e usa `toUpperCase`, `padEnd`, `padStart` e `toFixed` |

## Reflexão

(cole aqui a sua reflexão: veja o Passo 3)