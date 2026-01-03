# tm2pcp-webtool

<p align="right">
  <a href="README.md">English</a> |
  <strong>Português (Brasil)</strong>
</p>

O **tm2pcp-webtool** é uma ferramenta educacional interativa, executada diretamente no navegador, que demonstra a redução clássica do **Problema da Aceitação de Máquinas de Turing** para o **Problema da Correspondência de Post Modificado (MPCP)** e do **MPCP para o PCP**.

A ferramenta foi projetada para o ensino de **Teoria da Computação**, permitindo que estudantes *vejam*, *manipulem* e *simulem* a execução de uma Máquina de Turing por meio de dominós.

🔗 **Demonstração online:** https://brunogrisci.github.io/tm2pcp

🔗 **Repositório no GitHub:** https://github.com/brunogrisci/tm2pcp-webtool

![Visão geral do tm2pcp-webtool](docs/screenshots/overview.png)

---

## ✨ Funcionalidades

### Funcionalidades principais
- Importação de uma **Máquina de Turing** definida no formato `.mt` utilizado pelo  
  **Simulador de Máquina de Turing** (Prof. Rodrigo Machado).
- Construção automática do **conjunto de dominós do MPCP** que codifica a execução da MT.
- Transformação opcional **MPCP ⇒ PCP**, seguindo a redução clássica.
- **Paleta de dominós** e **área de trabalho** interativas:
  - Arrastar e soltar dominós
  - Duplo clique para adicionar dominós à área de trabalho
  - Remoção individual de dominós
- Visualização ao vivo das **strings concatenadas Superior e Inferior**, com:
  - Coloração por símbolo de acordo com a etapa da construção
  - Alinhamento exato por colunas (suporte a símbolos com múltiplos caracteres)
  - Alternância entre quebra de linha ou rolagem horizontal
- **Tabela de Transições** visual da Máquina de Turing importada:
  - Símbolo marcador exibido como **primeira coluna**
  - Símbolo branco exibido como **última coluna**
  - Destaque da transição relevante quando um dominó é selecionado

---

### Suporte a MPCP / PCP
- Alternância entre os modos **MPCP** e **PCP**:
  - Modo MPCP: o primeiro dominó é fixo na área de trabalho
  - Modo PCP: a área de trabalho inicia vazia
- Distinção clara entre:
  - Transições brutas no arquivo `.mt`
  - Transições efetivamente utilizadas pela máquina
- Tratamento correto de múltiplos estados de aceitação e rejeição implícita

---

### Exportação & reprodutibilidade
- **Exportação do conjunto de dominós exibido** (MPCP ou PCP) como arquivo `.csv`:

domino_id,top_string,bottom_string


- Suporte para análise offline, listas de exercícios e uso em solucionadores externos de PCP.

---

### 🔍 Solucionador (M)PCP (limitado)

A ferramenta inclui um **solucionador limitado** para exploração experimental.

⚠️ **Importante:**  
O PCP é **indecidível**. Este solucionador **não é** um procedimento de decisão.

#### Como o solucionador funciona

- Executa uma busca incremental baseada em prefixos
- Mantém apenas sequências consistentes por prefixo
- Expande sequências até limites definidos pelo usuário:
  - **Profundidade máxima**
  - **Limite de tempo (ms)**
  - **Limite de nós**

O algoritmo é inspirado em:

- **Ling Zhao**, *Solving the Post Correspondence Problem*, Tese de Doutorado, Capítulo 2.2  
- **Arne Vogel**, solucionador de PCP e explicação em blog

#### Controles do solucionador

- **Tentar resolver**: inicia a busca limitada
- **Cancelar**: interrompe a busca
- **Carregar solução na área de trabalho**: inspeciona uma solução encontrada

#### Por que isso não contradiz a indecidibilidade

- Se o solucionador encontra uma solução → ela é correta
- Se ele termina sem encontrar solução → nenhuma conclusão pode ser tirada

Esse comportamento é **esperado** e ilustra a indecidibilidade na prática.

---

### ❓ Sistema de ajuda integrado

Cada parte principal da interface possui um **botão de ajuda “?”**, que abre uma explicação na própria página, cobrindo:

- fundamentação teórica,
- definições formais,
- comportamento da interface,
- e como cada componente se relaciona com a redução.

O conteúdo de ajuda é:

- bilíngue (Inglês / Português Brasileiro),
- sincronizado com o modo escuro,
- projetado para leitura independente pelos estudantes.

---

### Usabilidade & Interface
- 🌙 / ☀️ **Alternância de modo escuro**
- 🇬🇧 / 🇧🇷 **Alternância de idioma** (Inglês & Português Brasileiro)
- Preferências persistentes via `localStorage`
- Validação da palavra de entrada com base no alfabeto de entrada da MT (ε permitido)
- Mensagens de status claras e feedback de erro
- Totalmente executado no lado do cliente (sem backend)

---

## 📄 Formato de entrada

### Arquivo `.mt`
A ferramenta aceita arquivos `.mt` criados com o:

**Simulador de Máquina de Turing**  
Prof. Rodrigo Machado  
https://www.inf.ufrgs.br/~rma/simuladores/turing.html

O arquivo `.mt` codifica:

- Alfabeto de entrada
- Alfabeto auxiliar
- Alfabeto da fita
- Símbolo marcador (início da fita)
- Símbolo branco
- Estados (um estado inicial e zero ou mais estados de aceitação)
- Matriz de transições
- Bloco opcional de comentários (exibido na interface)

⚠️ A rejeição é implícita: uma configuração sem transição aplicável e em estado não-aceitante é rejeitante.

---

### Palavra de entrada
- A palavra de entrada é validada contra o **alfabeto de entrada** da MT.
- A **palavra vazia (ε)** é sempre aceita como entrada válida.
- Símbolos com múltiplos caracteres são suportados.
- Símbolos inválidos são reportados com feedback preciso.

---

## 🧠 Objetivos pedagógicos

Esta ferramenta foi construída para ajudar estudantes a:
- Compreender o **significado operacional** de reduções
- Visualizar como computações de Máquinas de Turing são codificadas como instâncias de PCP
- Explorar a diferença entre MPCP e PCP
- Experimentar interativamente em vez de depender apenas de provas estáticas

Ela é adequada para:
- Disciplinas de graduação em **Teoria da Computação**
- Cursos de pós-graduação em linguagens formais e computabilidade
- Demonstrações, trabalhos práticos e aulas interativas

---

## 🌐 Internacionalização (i18n)

- Suporte completo a **Inglês** e **Português Brasileiro**
- Todas as strings da interface, tooltips e mensagens de status são internacionalizadas
- A troca de idioma **não** reinicia a área de trabalho nem o estado da ferramenta

---

## 🛠️ Tecnologias utilizadas

- **HTML / CSS / JavaScript** puro
- Sem frameworks externos
- Totalmente client-side
- Projetado para hospedagem via **GitHub Pages**

---

## 🚀 Trabalhos futuros (ideias)

- Exportação de conjuntos de dominós em JSON
- Importação de conjuntos de dominós previamente exportados
- Modo guiado passo a passo da construção
- Animação da execução da Máquina de Turing
- Suporte a formatos adicionais de arquivos de MT

---

## 🎓 Créditos

**Desenvolvido por**  
**Prof. Bruno Iochins Grisci**  
Departamento de Informática Teórica  
Instituto de Informática – Universidade Federal do Rio Grande do Sul (UFRGS)  
🔗 https://brunogrisci.github.io/  
🔗 https://www.inf.ufrgs.br/site/  
🔗 https://www.ufrgs.br/site/

**Baseado e inspirado em**  
Aulas do **Prof. Rodrigo Machado**  
📺 https://www.youtube.com/watch?v=u66FlodaBf4&list=PLLUEUvJhgJJCC76AYWdWH-GcOS2BogpEN&index=27

**Inspiração para o solucionador**:
- Ling Zhao, *Solving the Post Correspondence Problem*, Tese de Doutorado, Cap. 2.2
- Arne Vogel, solucionador de PCP e post em blog

**Nota de desenvolvimento**  
Este webtool foi criado com o auxílio de **IA Generativa (ChatGPT 5.1)**.

---

## 📦 Licença

Este projeto está licenciado sob a **Licença MIT**.

Você é livre para utilizá-lo, modificá-lo e redistribuí-lo para fins acadêmicos e educacionais, desde que a devida atribuição seja fornecida.

Consulte o arquivo `LICENSE` para mais detalhes.

---

Se você utilizar esta ferramenta em ensino ou pesquisa, uma citação ou link para o repositório será muito bem-vindo.

## 📚 Citação

Se você utilizar esta ferramenta em trabalhos acadêmicos (artigos, teses, relatórios técnicos ou material didático), por favor cite:

```bibtex
@software{Grisci_tm2pcp_webtool,
  author       = {Bruno Iochins Grisci},
  title        = {{tm2pcp-webtool}: Uma Ferramenta Interativa para Reduções de Máquinas de Turing para (M)PCP},
  year         = {2025},
  url          = {https://github.com/brunogrisci/tm2pcp-webtool},
  note         = {Software educacional baseado na web},
}
```

## 🔗 Veja também

- **Webtool PCP → Ambiguidade de GLC**  
  Web app: https://brunogrisci.github.io/pcp2cfg  
  Repositório: https://github.com/BrunoGrisci/pcp2cfg-webtool  
  Ferramenta complementar que converte conjuntos de dominós de PCP em gramáticas livres de contexto para estudar ambiguidade. Exporte os dominós do tm2pcp em CSV e carregue no pcp2cfg para seguir a análise na gramática resultante e em suas derivações ambíguas.

