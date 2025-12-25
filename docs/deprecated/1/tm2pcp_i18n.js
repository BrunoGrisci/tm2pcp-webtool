// tm2pcp_i18n.js – bilingual support (English / Portuguese-BR)

const I18N = {
  "en": {
    // Titles / sections
    "title.main": "TM → PCP Domino Generator",
    "title.palette": "Domino palette",
    "title.workspace": "Workspace (sequence of dominoes)",

    // Labels / buttons / toggles
    "label.mt_file": ".mt file:",
    "label.input_word": "Input word:",
    "label.generate_btn": "Generate dominoes",
    "button.export_csv": "Export CSV",
    "tooltip.export_csv": "Export the currently displayed domino set as a CSV file.",
    "status.export_none": "Nothing to export: generate dominoes first.",
    "status.export_ok": "Exported {N} dominoes to {FILE}.",

    "label.mpcp_to_pcp": "MPCP ⇒ PCP",
    "label.dark_mode": "Dark mode",
    "button.clear_workspace": "Clear workspace",
    "label.wrap_strings": "Wrap concatenated strings",

    // Palette / workspace notes
    "note.palette":
      "Dominoes are grouped and color-coded by construction step. When “MPCP ⇒ PCP” is checked, you see the PCP instance, but still separated by their original steps.",
    "note.workspace":
      "Drop tiles here in order. You can reorder or delete individual tiles. The Top/Bottom strings below are color-coded according to the step each symbol came from.",

    // TM table
    "tm.table_label": "Transition Table",
    "tm.parsed_title": "Parsed Turing Machine:",
    "tm.input_alphabet": "Input alphabet (Σ):",
    "tm.aux_alphabet": "Auxiliary alphabet (Γ \\ Σ):",
    "tm.tape_alphabet": "Tape alphabet (Σ ∪ Γ):",
    "tm.marker": "Marker (beg. of tape):",
    "tm.blank": "Blank (β):",
    "tm.states": "States (Q):",
    "tm.initial_state": "Initial state (q0):",
    "tm.accepting_states": "Accepting states (F):",
    "tm.num_transitions_distinct": "Distinct transitions:",
    "tm.num_transitions_raw": "Raw transitions in file:",
    "tm.num_transitions": "#Transitions:",
    "tm.comment_title": "Comment (from .mt file):",

    // Status messages
    "status.tm_parsed_ok": "Turing machine parsed successfully.",
    "status.parse_error": "Error parsing .mt file: {ERR}",
    "status.no_mpcp": "No MPCP dominoes to display.",
    "status.need_mt": "Please load a .mt file first.",
    "status.mpcp_shown": "Showing original {N} MPCP dominoes.",
    "status.pcp_shown":
      "Showing PCP instance with {K} dominoes (derived from {N} MPCP dominoes).",
    "status.gen_error": "Error generating dominoes: {ERR}",
    "status.invalid_input_word": "Invalid input word: symbol \"{CH}\" at position {IDX} is not in the input alphabet. Allowed symbols: {ALPH}.",

    // About / header
    "about.developed_by_label": "Developed by Prof. Bruno Iochins Grisci",
    "about.built_with": "(Webtool built using Generative AI — ChatGPT 5.1)",
    "about.based_on": "Based and inspired by the class of Prof. Rodrigo Machado:",
    "about.input_label": "Input format:",
    "about.input_sentence1":
      "This webtool accepts a .mt file describing a Turing Machine created using the Simulador de Máquina de Turing developed by Prof. Rodrigo Machado:",
    "about.input_sentence2":
      "The .mt file encodes the input & auxiliary alphabet, states, transitions, marker and blank symbols.",

    // Step headers
    "step.header_plain": "Step {step}",
    "step.header_pcp": "Step {step} (PCP, from original Step {step})",
    "step.header8": "Step 8 (closing tile for MPCP ⇒ PCP)",

    // Concatenated strings
    "concat.top": "Top:",
    "concat.bottom": "Bottom:",
    "concat.equal": "Top and bottom are equal ✔",
    "concat.diff": "Top and bottom differ ✘",

    // Footer
    "footer.code_label": "Code on GitHub:",
    "footer.licensed_label": "Licensed under",
    "solver.title": "PCP Solver (bounded)",
    "solver.note": "PCP is undecidable. This solver performs a bounded search and may fail even if a solution exists.",
    "solver.credit": "Inspired by Arne Vogel's blogpost and algorithm (<a href=\"https://www.arnevogel.com/post-correspondence-problem/\" target=\"_blank\" rel=\"noopener noreferrer\">arnevogel.com</a>) and Ling Zhao's Thesis (Chapter 2.2) (<a href=\"https://webdocs.cs.ualberta.ca/~games/PCP/thesis/pcp.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">pcp.pdf</a>).",
    "solver.depth_label": "Max depth:",
    "solver.time_label": "Time limit (ms):",
    "solver.nodes_label": "Node limit:",
    "solver.solve_btn": "Try solve",
    "solver.cancel_btn": "Cancel",
    "solver.load_btn": "Load solution into workspace",
    "solver.status.need_dominoes": "Generate dominoes first.",
    "solver.status.running": "Searching…",
    "solver.status.progress": "Expanded {N} nodes (depth={D}, best suffix={B})",
    "solver.status.found": "Solution found (length {LEN}).",
    "solver.status.done": "Solver finished.",
    "solver.status.cancelled": "Solver cancelled.",
    "solver.status.error": "Solver error: {ERR}",
    "solver.result.found": "Found solution (length {LEN}) in {MS} ms after expanding {N} nodes. Sequence (1-based indices): {SEQ}",
    "solver.result.notfound": "No solution found within the current bounds. (expanded {N} nodes, {MS} ms)",
    "solver.result.timeout": "Time limit reached. (expanded {N} nodes, {MS} ms)",
    "solver.result.nodelimit": "Node limit reached. (expanded {N} nodes, {MS} ms)",
    "solver.result.cancelled": "Cancelled.",
    "solver.title_pcp": "PCP Solver (bounded)",
    "solver.title_mpcp": "MPCP Solver (bounded)",

    // Help modal (HTML-capable bodies)
    "help.mt_file.title": "About the .mt file",
    "help.mt_file.body_html":
      "<p>The tool expects a <code>.mt</code> file in the format used by Prof. Rodrigo Machado's <em>Simulador de Máquina de Turing</em>. This file encodes:</p>\n<ul>\n<li>the input alphabet <strong>Σ</strong> and auxiliary alphabet <strong>Γ \\ Σ</strong></li>\n<li>marker and blank symbols</li>\n<li>states, initial state, accepting states</li>\n<li>the transition table</li>\n</ul>\n<p>Once loaded, the transition table is shown below and is used to generate the (M)PCP dominoes.</p>",

    "help.input_word.title": "About the input word",
    "help.input_word.body_html":
      "<p>This is the input word <code>w</code> for the Turing machine. The tool validates the symbols of <code>w</code> against the machine’s input alphabet <strong>Σ</strong> (the empty word <code>ε</code> is always allowed).</p>\n<p>The domino construction encodes the computation of <code>M</code> on <code>w</code> as an instance of <strong>MPCP</strong>, and (optionally) converts it to a <strong>PCP</strong> instance.</p>",

    "help.mpcp_to_pcp.title": "MPCP ⇒ PCP toggle",
    "help.mpcp_to_pcp.body_html":
      "<p>When unchecked, the palette shows the <strong>MPCP</strong> instance (with a designated first domino).</p>\n<p>When checked, the tool applies the standard reduction <strong>MPCP ⇒ PCP</strong>, producing a PCP instance that has a solution iff the original MPCP instance has one.</p>\n<p>In PCP mode, the workspace starts empty; in MPCP mode, the first domino is fixed.</p>",
},

  "pt-BR": {
    // Titles / sections
    "title.main": "Gerador de dominós MT → PCP",
    "title.palette": "Paleta de dominós",
    "title.workspace": "Área de trabalho (sequência de dominós)",

    // Labels / buttons / toggles
    "label.mt_file": "Arquivo .mt:",
    "label.input_word": "Palavra de entrada:",
    "label.generate_btn": "Gerar dominós",
    "button.export_csv": "Exportar CSV",
    "tooltip.export_csv": "Exporta o conjunto de dominós atualmente exibido para um arquivo CSV.",
    "status.export_none": "Nada para exportar: gere os dominós primeiro.",
    "status.export_ok": "Exportados {N} dominós para {FILE}.",

    "label.mpcp_to_pcp": "PCPM ⇒ PCP",
    "label.dark_mode": "Modo escuro",
    "button.clear_workspace": "Limpar área de trabalho",
    "label.wrap_strings": "Quebrar linhas das cadeias",


    // Palette / workspace notes
    "note.palette":
      "Os dominós são agrupados e coloridos por etapa da construção. Quando “PCPM ⇒ PCP” está marcado, você vê a instância de PCP, ainda separada pelas etapas originais.",
    "note.workspace":
      "Arraste os dominós para cá na ordem desejada. Você pode reordenar ou apagar dominós individualmente. As cadeias Topo/Base abaixo são coloridas de acordo com a etapa de cada símbolo.",

    // TM table
    "tm.table_label": "Tabela de Transição",
    "tm.parsed_title": "Máquina de Turing interpretada:",
    "tm.input_alphabet": "Alfabeto de entrada (Σ):",
    "tm.aux_alphabet": "Alfabeto auxiliar (Γ \\ Σ):",
    "tm.tape_alphabet": "Alfabeto de fita (Σ ∪ Γ):",
    "tm.marker": "Marcador de início de fita:",
    "tm.blank": "Branco (β):",
    "tm.states": "Estados (Q):",
    "tm.initial_state": "Estado inicial (q0):",
    "tm.accepting_states": "Estados de aceitação (F):",
    "tm.num_transitions_distinct": "Transições distintas:",
    "tm.num_transitions_raw": "Transições brutas no arquivo:",
    "tm.num_transitions": "#Transições:",
    "tm.comment_title": "Comentário (do arquivo .mt):",

    // Status messages
    "status.tm_parsed_ok": "Máquina de Turing carregada com sucesso.",
    "status.parse_error": "Erro ao interpretar o arquivo .mt: {ERR}",
    "status.no_mpcp": "Nenhum dominó de PCPM para exibir.",
    "status.need_mt": "Por favor, carregue um arquivo .mt primeiro.",
    "status.mpcp_shown": "Exibindo {N} dominós da instância de PCPM.",
    "status.pcp_shown":
      "Exibindo instância de PCP com {K} dominós (derivados de {N} dominós de PCPM).",
    "status.gen_error": "Erro ao gerar dominós: {ERR}",
    "status.invalid_input_word": "Palavra de entrada inválida: o símbolo \"{CH}\" na posição {IDX} não pertence ao alfabeto de entrada. Símbolos permitidos: {ALPH}.",


    // About / header
    "about.developed_by_label": "Desenvolvido por Prof. Bruno Iochins Grisci",
    "about.built_with": "(Ferramenta web criada com IA generativa — ChatGPT 5.1)",
    "about.based_on": "Baseada e inspirada na aula do Prof. Rodrigo Machado:",
    "about.input_label": "Formato de entrada:",
    "about.input_sentence1":
      "Esta ferramenta aceita um arquivo .mt descrevendo uma Máquina de Turing criada com o Simulador de Máquina de Turing desenvolvido pelo Prof. Rodrigo Machado:",
    "about.input_sentence2":
      "O arquivo .mt codifica o alfabeto de entrada e auxiliar, os estados, as transições, o marcador de início de fita e o símbolo branco.",

    // Step headers
    "step.header_plain": "Etapa {step}",
    "step.header_pcp": "Etapa {step} (PCP, a partir da Etapa {step} original)",
    "step.header8": "Etapa 8 (peça de fechamento para PCPM ⇒ PCP)",

    // Concatenated strings
    "concat.top": "Topo:",
    "concat.bottom": "Base:",
    "concat.equal": "Topo e base são iguais ✔",
    "concat.diff": "Topo e base são diferentes ✘",

    // Footer
    "footer.code_label": "Código no GitHub:",
    "footer.licensed_label": "Licenciado sob",
    "solver.title": "Solucionador de PCP (limitado)",
    "solver.note": "PCP é indecidível. Este solucionador faz uma busca limitada e pode falhar mesmo que exista uma solução.",
    "solver.credit": "Inspirado no blogpost e algoritmo de Arne Vogel (<a href=\"https://www.arnevogel.com/post-correspondence-problem/\" target=\"_blank\" rel=\"noopener noreferrer\">arnevogel.com</a>) e na Tese (Capítulo 2.2) de Ling Zhao (<a href=\"https://webdocs.cs.ualberta.ca/~games/PCP/thesis/pcp.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">pcp.pdf</a>).",
    "solver.depth_label": "Profundidade máx.:",
    "solver.time_label": "Limite de tempo (ms):",
    "solver.nodes_label": "Limite de nós:",
    "solver.solve_btn": "Tentar resolver",
    "solver.cancel_btn": "Cancelar",
    "solver.load_btn": "Carregar solução na área de trabalho",
    "solver.status.need_dominoes": "Gere os dominós primeiro.",
    "solver.status.running": "Buscando…",
    "solver.status.progress": "Expandidos {N} nós (prof={D}, melhor sufixo={B})",
    "solver.status.found": "Solução encontrada (tamanho {LEN}).",
    "solver.status.done": "Busca finalizada.",
    "solver.status.cancelled": "Busca cancelada.",
    "solver.status.error": "Erro no solucionador: {ERR}",
    "solver.result.found": "Solução encontrada (tamanho {LEN}) em {MS} ms após expandir {N} nós. Sequência (índices começando em 1): {SEQ}",
    "solver.result.notfound": "Nenhuma solução encontrada dentro dos limites atuais. (expandidos {N} nós, {MS} ms)",
    "solver.result.timeout": "Limite de tempo atingido. (expandidos {N} nós, {MS} ms)",
    "solver.result.nodelimit": "Limite de nós atingido. (expandidos {N} nós, {MS} ms)",
    "solver.result.cancelled": "Cancelado.",
    "solver.title_pcp": "Resolvedor PCP (busca limitada)",
    "solver.title_mpcp": "Resolvedor MPCP (busca limitada)",

    // Help modal (corpo com HTML)
    "help.mt_file.title": "Sobre o arquivo .mt",
    "help.mt_file.body_html":
      "<p>A ferramenta espera um arquivo <code>.mt</code> no formato do <em>Simulador de Máquina de Turing</em> do Prof. Rodrigo Machado. Esse arquivo codifica:</p>\n<ul>\n<li>o alfabeto de entrada <strong>Σ</strong> e o alfabeto auxiliar <strong>Γ \\ Σ</strong></li>\n<li>os símbolos de marcador e branco</li>\n<li>os estados, o estado inicial e os estados de aceitação</li>\n<li>a tabela de transição</li>\n</ul>\n<p>Após carregar, a tabela de transição aparece abaixo e é usada para gerar os dominós de (P)CPM/PCP.</p>",

    "help.input_word.title": "Sobre a palavra de entrada",
    "help.input_word.body_html":
      "<p>Esta é a palavra de entrada <code>w</code> da Máquina de Turing. A ferramenta valida os símbolos de <code>w</code> usando o alfabeto de entrada <strong>Σ</strong> (a palavra vazia <code>ε</code> é sempre permitida).</p>\n<p>A construção de dominós codifica a computação de <code>M</code> em <code>w</code> como uma instância de <strong>PCPM</strong> e (opcionalmente) converte para uma instância de <strong>PCP</strong>.</p>",

    "help.mpcp_to_pcp.title": "Alternância PCPM ⇒ PCP",
    "help.mpcp_to_pcp.body_html":
      "<p>Quando desmarcado, a paleta mostra a instância de <strong>PCPM</strong> (com um primeiro dominó designado).</p>\n<p>Quando marcado, a ferramenta aplica a redução padrão <strong>PCPM ⇒ PCP</strong>, gerando uma instância de PCP que tem solução se, e somente se, a instância de PCPM original tem solução.</p>\n<p>No modo PCP, a área de trabalho inicia vazia; no modo PCPM, o primeiro dominó fica fixo.</p>",
}
};

let currentLang = "en";

// --- Track last status message so we can retranslate it on language changes ---
let lastStatusKey = null;
let lastStatusParams = {};
let lastStatusIsError = false;

function setStatusFromKey(key, params = {}, isError = false) {
  // If key is null/empty: clear status and clear the “last status” memory.
  if (!key) {
    lastStatusKey = null;
    lastStatusParams = {};
    lastStatusIsError = false;
    if (typeof showStatus === "function") {
      showStatus("", false);
    }
    return;
  }

  lastStatusKey = key;
  lastStatusParams = params || {};
  lastStatusIsError = !!isError;

  if (typeof showStatus === "function") {
    showStatus(t(key, lastStatusParams), lastStatusIsError);
  }
}


function t(key, params = {}) {
  const dict = I18N[currentLang] || I18N["en"];
  let s = dict[key] || key;
  for (const [k, v] of Object.entries(params)) {
    s = s.replace(new RegExp("\\{" + k + "\\}", "g"), String(v));
  }
  return s;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = t(key);
  });

  // HTML-capable i18n (used only when we intentionally want links/markup)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (!key) return;
    el.innerHTML = t(key);
  });


  const lbl = document.getElementById("tmTableLabel");
  if (lbl) {
    lbl.textContent = t("tm.table_label");
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    const lang = btn.getAttribute("data-lang");
    btn.classList.toggle("active-lang", lang === currentLang);
  });

  document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = "en";
  currentLang = lang;
  localStorage.setItem("tm2pcp-lang", lang);

  applyI18n();

  // If a help modal is open, refresh its content in the new language.
  if (typeof window.refreshHelpModal === "function") {
    window.refreshHelpModal();
  }

  // If a help modal is open, re-render it in the new language.
  if (typeof window.refreshHelpModal === "function") {
    window.refreshHelpModal();
  }

  // Re-render TM info in the new language (if available)
  if (typeof renderTMInfo === "function") {
    renderTMInfo(currentTM);
  }

  // Re-render status in the new language, if we know which message it is
  if (lastStatusKey && typeof showStatus === "function") {
    showStatus(t(lastStatusKey, lastStatusParams), lastStatusIsError);
  }
}


function initLanguageFromStorage() {
  const saved = localStorage.getItem("tm2pcp-lang");
  if (saved && I18N[saved]) {
    currentLang = saved;
  } else {
    const navLang = navigator.language || navigator.userLanguage || "en";
    currentLang = navLang.startsWith("pt") ? "pt-BR" : "en";
  }
  applyI18n();
}
