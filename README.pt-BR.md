# tm2pcp-webtool

<p align="right">
  <a href="README.md">English</a> |
  <strong>Português (Brasil)</strong>
</p>

**tm2pcp-webtool** é uma ferramenta educacional interativa, executada diretamente no navegador, que demonstra a redução clássica do **Problema da Aceitação de Máquinas de Turing** para o **Problema da Correspondência de Post Modificado (MPCP)** e, em seguida, do **MPCP para o PCP**.

A ferramenta foi projetada para o ensino de **Teoria da Computação**, permitindo que estudantes *visualizem*, *manipulem* e *simulem* a execução de uma Máquina de Turing por meio de dominós.

🔗 **Demonstração online:** https://brunogrisci.github.io/tm2pcp

🔗 **Repositório no GitHub:** https://github.com/brunogrisci/tm2pcp-webtool

![Visão geral da ferramenta tm2pcp-webtool](docs/screenshots/overview.png)

---

## ✨ Funcionalidades

### Funcionalidades principais
- Importação de **Máquinas de Turing** definidas no formato `.mt` utilizado pelo  
  **Simulador de Máquina de Turing** (Prof. Rodrigo Machado).
- Construção automática do conjunto de dominós do **MPCP** que codifica a execução da MT.
- Transformação opcional **MPCP ⇒ PCP**, seguindo a redução clássica.
- **Paleta de dominós** e **área de trabalho** interativas:
  - Arrastar e soltar dominós
  - Duplo clique para adicionar dominós ao final da área de trabalho
  - Remoção individual de dominós
- Visualização dinâmica das **cadeias concatenadas do topo e da base**, com:
  - Coloração por etapa de construção
  - Alinhamento exato por símbolo (com suporte a símbolos multi-caractere)
  - Alternância entre quebra automática de linha ou rolagem horizontal
- **Tabela de Transições** visual da Máquina de Turing importada:
  - Símbolo marcador exibido como a **primeira coluna**
  - Símbolo em branco exibido como a **última coluna**
  - Destaque da transição correspondente ao selecionar um dominó


---

### Suporte a MPCP / PCP
- Alternância entre os modos **MPCP** e **PCP**:
  - Modo MPCP: o primeiro dominó é fixo na área de trabalho
  - Modo PCP: a área de trabalho inicia vazia
- Distinção clara entre:
  - Transições brutas presentes no arquivo `.mt`
  - Transições distintas efetivamente utilizadas pela máquina
- Tratamento correto de múltiplos estados de aceitação e rejeição implícita


---

### Exportação e reprodutibilidade
- **Exportação do conjunto de dominós atualmente exibido** (MPCP ou PCP) para um arquivo `.csv`:

domino_id,top_string,bottom_string

- Facilita análise offline, exercícios avaliativos e integração com solucionadores externos de PCP.

---

### Usabilidade e interface
- 🌙 / ☀️ **Alternância entre modo escuro e claro**
- 🇬🇧 / 🇧🇷 **Alternância de idioma** (Inglês e Português do Brasil)
- Preferências persistentes via `localStorage`
- Validação da palavra de entrada em relação ao alfabeto da MT (ε permitido)
- Mensagens de status e erros claras e informativas
- Execução totalmente **client-side** (sem backend)

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
- Símbolo em branco
- Estados (com um estado inicial e zero ou mais estados de aceitação)
- Matriz de transições
- Bloco opcional de comentários (exibido na interface)

⚠️ A rejeição é implícita: uma configuração sem transição aplicável e em um estado não-aceitador é considerada rejeitora.

---

### Palavra de entrada
- A palavra de entrada é validada em relação ao **alfabeto de entrada** da MT.
- A **palavra vazia (ε)** é sempre aceita como válida.
- Símbolos multi-caractere são suportados.
- Símbolos inválidos são reportados com feedback preciso ao usuário.

---

## 🧠 Objetivos pedagógicos

Esta ferramenta foi construída para auxiliar estudantes a:
- Compreender o **significado operacional** das reduções
- Visualizar como computações de Máquinas de Turing são codificadas como instâncias de PCP
- Explorar a diferença entre MPCP e PCP
- Experimentar interativamente conceitos tradicionalmente apresentados apenas de forma teórica

É adequada para:
- Disciplinas de graduação em **Teoria da Computação**
- Cursos de pós-graduação em computabilidade e linguagens formais
- Demonstrações, exercícios e aulas interativas

---

## 🎓 Créditos

**Desenvolvido por**  
**Prof. Bruno Iochins Grisci**  
Departamento de Informática Teórica  
Instituto de Informática – Universidade Federal do Rio Grande do Sul (UFRGS)  
🔗 https://brunogrisci.github.io/  
🔗 https://www.inf.ufrgs.br/site/  
🔗 https://www.ufrgs.br/site/

**Baseado e inspirado nas aulas de**  
**Prof. Rodrigo Machado**  
📺 https://www.youtube.com/watch?v=u66FlodaBf4&list=PLLUEUvJhgJJCC76AYWdWH-GcOS2BogpEN&index=27

**Nota sobre o desenvolvimento**  
Esta ferramenta foi desenvolvida com o auxílio de **IA Generativa (ChatGPT 5.1)**.

---

## 🌐 Internacionalização (i18n)

- Suporte completo a **Inglês** e **Português do Brasil**
- Todos os textos da interface, tooltips e mensagens de status são internacionalizados
- A troca de idioma **não reinicia** a área de trabalho nem o estado da aplicação

---

## 🛠️ Tecnologias utilizadas

- **HTML / CSS / JavaScript** puro
- Nenhum framework externo
- Execução totalmente no navegador
- Projetado para hospedagem via **GitHub Pages**

---

## 📦 Licença

Este projeto é licenciado sob a **Licença MIT**.

Você é livre para usar, modificar e redistribuir o código para fins acadêmicos e educacionais, desde que a devida atribuição seja mantida.

Consulte o arquivo `LICENSE` para mais detalhes.

---

## 🚀 Trabalhos futuros (ideias)

- Exportação dos dominós em formato JSON
- Importação de conjuntos de dominós previamente exportados
- Modo guiado passo a passo da construção
- Animação da execução da Máquina de Turing
- Suporte a formatos adicionais de descrição de MT

---

Se você utilizar esta ferramenta em ensino ou pesquisa, uma citação ou link para o repositório será muito bem-vindo.

## 📚 Citação

Se você utilizar esta ferramenta em trabalhos acadêmicos (artigos, teses, dissertações, relatórios técnicos ou material didático), por favor cite:

```bibtex
@software{Grisci_tm2pcp_webtool,
  author       = {Bruno Iochins Grisci},
  title        = {{tm2pcp-webtool}: Uma Ferramenta Interativa para Reduções de Máquinas de Turing para (M)PCP},
  year         = {2025},
  url          = {https://github.com/brunogrisci/tm2pcp-webtool},
  note         = {Software educacional baseado na web},
}

