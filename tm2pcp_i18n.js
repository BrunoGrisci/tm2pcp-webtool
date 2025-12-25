// Bruno Iochins Grisci 2025
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
      "<p>" +
      "This tool expects a <code>.mt</code> file describing a <strong>single-tape deterministic Turing machine</strong>, " +
      "using the format adopted by Prof. Rodrigo Machado’s <em>Simulador de Máquina de Turing</em>." +
      "</p>" +

      "<p>" +
      "Conceptually, the file provides a <strong>formal definition</strong> of the machine <code>M</code> that will later be " +
      "encoded as an instance of the (Modified) Post Correspondence Problem." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">What information the file contains</h4>" +
      "<p>The <code>.mt</code> file specifies:</p>" +

      "<ul>" +
      "  <li>The <strong>input alphabet</strong> <strong>Σ</strong>, used for the initial input word.</li>" +
      "  <li>The <strong>tape alphabet</strong> <strong>Γ</strong>, which includes Σ plus additional auxiliary symbols.</li>" +
      "  <li>A distinguished <strong>blank symbol</strong>, representing empty tape cells.</li>" +
      "  <li>A special <strong>marker symbol</strong>, used internally to delimit configurations.</li>" +
      "  <li>A finite set of <strong>states</strong>, including the <strong>initial state</strong> and one or more <strong>accepting states</strong>.</li>" +
      "  <li>The <strong>transition function</strong>, given as a transition table.</li>" +
      "</ul>" +

      "<p>" +
      "Each transition has the standard form:" +
      "</p>" +

      "<p style=\"margin-left:1em; font-family:monospace;\">" +
      "(current&nbsp;state,&nbsp;read&nbsp;symbol) → (next&nbsp;state,&nbsp;written&nbsp;symbol,&nbsp;head&nbsp;movement)" +
      "</p>" +

      "<p>" +
      "where the head movement is typically <code>E</code> (left) or <code>D</code> (right)." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">How the tool uses the .mt file</h4>" +
      "<p>" +
      "After loading the file, the tool parses its contents and displays the <strong>transition table</strong> below. " +
      "This table is not merely visual: it is the <strong>semantic core</strong> of the reduction." +
      "</p>" +

      "<p>" +
      "From the transition table, the tool systematically constructs dominoes that encode:" +
      "</p>" +

      "<ul>" +
      "  <li>valid <strong>initial configurations</strong> for the input word <code>w</code>,</li>" +
      "  <li>legal <strong>simulation steps</strong> of the Turing machine,</li>" +
      "  <li>and <strong>accepting configurations</strong> that witness acceptance.</li>" +
      "</ul>" +

      "<p>" +
      "The resulting domino set has a solution if and only if the Turing machine described in the <code>.mt</code> file " +
      "accepts the chosen input word." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Creating .mt files</h4>" +
      "<p>" +
      "You can create and test compatible <code>.mt</code> files using the online simulator available at:" +
      "</p>" +

      "<p style=\"margin-left:1em;\">" +
      "<a href=\"https://www.inf.ufrgs.br/~rma/simuladores/turing.html\" target=\"_blank\" rel=\"noopener\">" +
      "https://www.inf.ufrgs.br/~rma/simuladores/turing.html</a>" +
      "</p>" +

      "<p>" +
      "Machines defined there can be directly exported and loaded here, making it easy to move from " +
      "<strong>operational simulation</strong> to <strong>formal reductions and undecidability proofs</strong>." +
      "</p>",

      "help.input_word.title": "About the input word",
      "help.input_word.body_html":
        "<p>" +
        "This field specifies the <strong>input word</strong> <code>w</code> given to the Turing machine <code>M</code>. " +
        "The tool checks the symbols of <code>w</code> against the machine’s <strong>input alphabet</strong> <strong>Σ</strong>, " +
        "as defined in the loaded <code>.mt</code> file." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Validation rules</h4>" +
        "<ul>" +
        "  <li><strong>Alphabet check:</strong> every character of <code>w</code> must belong to Σ.</li>" +
        "  <li><strong>Invalid symbols:</strong> if <code>w</code> contains a symbol not in Σ, the tool reports an error and the instance is not generated.</li>" +
        "  <li><strong>Spaces:</strong> whitespace characters (such as spaces typed with the space bar) are <strong>ignored</strong> and do not belong to the word.</li>" +
        "</ul>" +

        "<h4 style=\"margin-top:0.8em;\">The empty word</h4>" +
        "<p>" +
        "The <strong>empty word</strong> <code>ε</code> is always allowed, even when Σ is non-empty. " +
        "When <code>w = ε</code>, the tool constructs the initial Turing machine configuration with no input symbols on the tape, " +
        "except for the marker and blank symbols required by the simulation." +
        "</p>" +

        "<p>" +
        "In this case, the generated dominoes encode the computation of <code>M</code> starting from the empty tape, " +
        "exactly as in the formal definition of Turing machine acceptance for the empty input." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">How the input word is used in the reduction</h4>" +
        "<p>" +
        "The domino construction encodes the computation of <code>M</code> on <code>w</code> as an instance of <strong>Modified PCP (MPCP)</strong>. " +
        "The input word appears explicitly in the dominoes that represent the <strong>initial configuration</strong> of the machine." +
        "</p>" +

        "<p>" +
        "If the option is enabled, the tool then applies the standard transformation from <strong>MPCP</strong> to <strong>PCP</strong>, " +
        "producing an equivalent PCP instance whose solutions correspond exactly to accepting computations of <code>M</code> on <code>w</code>." +
        "</p>" +
        "<p>" +
        "Thus, changing the input word directly changes the initial configuration being simulated, " +
        "and consequently the set of dominoes generated by the reduction." +
        "</p>",

    "help.mpcp_to_pcp.title": "MPCP ⇒ PCP toggle",
    "help.mpcp_to_pcp.body_html":
      "<p>" +
      "This toggle controls whether the tool displays a <strong>Modified Post Correspondence Problem (MPCP)</strong> instance " +
      "or the corresponding standard <strong>Post Correspondence Problem (PCP)</strong> instance." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">PCP vs. MPCP</h4>" +
      "<p>" +
      "In the <strong>Post Correspondence Problem (PCP)</strong>, a solution is any non-empty sequence of dominoes whose " +
      "top and bottom strings match after concatenation. There is <em>no restriction</em> on which domino must appear first." +
      "</p>" +

      "<p>" +
      "The <strong>Modified PCP (MPCP)</strong> adds a single constraint: the solution sequence is required to <strong>start with a designated first domino</strong>. " +
      "Aside from this restriction, the matching condition is the same as in PCP." +
      "</p>" +

      "<p>" +
      "This extra constraint is extremely useful in reductions from Turing machines, because it allows the construction to " +
      "force a well-defined <strong>initial configuration</strong> of the simulated computation." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Why this tool builds an MPCP instance first</h4>" +
      "<p>" +
      "In this tool, the domino construction that simulates the computation of a Turing machine naturally yields an <strong>MPCP</strong> instance. " +
      "The fixed first domino encodes the initial tape configuration for the chosen input word and ensures that every valid solution " +
      "corresponds to a genuine computation starting from that configuration." +
      "</p>" +

      "<p>" +
      "When the toggle is <strong>unchecked</strong>, the palette shows this MPCP instance. " +
      "The first domino is fixed and is automatically placed at the beginning of the workspace." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">How the tool converts MPCP to PCP</h4>" +
      "<p>" +
      "When the toggle is <strong>checked</strong>, the tool applies the classical reduction <strong>MPCP ⇒ PCP</strong>. " +
      "This transformation removes the requirement of a fixed first domino while preserving solvability." +
      "</p>" +

      "<p>" +
      "The idea of the transformation is to <strong>encode the forced first choice using special symbols</strong>. " +
      "The tool systematically modifies the strings on the dominoes by concatenating marker symbols so that:" +
      "</p>" +

      "<ul>" +
      "  <li>Any valid PCP solution must implicitly simulate the required first domino,</li>" +
      "  <li>and every PCP solution corresponds to a valid MPCP solution, and vice versa.</li>" +
      "</ul>" +

      "<p>" +
      "Intuitively, the special symbols act as a <em>synchronization mechanism</em> that enforces the correct starting point " +
      "without explicitly fixing the first domino." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Effect on the workspace</h4>" +
      "<ul>" +
      "  <li><strong>MPCP mode:</strong> the workspace starts with the designated first domino already fixed.</li>" +
      "  <li><strong>PCP mode:</strong> the workspace starts empty, since PCP solutions may begin with any domino.</li>" +
      "</ul>" +

      "<p>" +
      "In both modes, the resulting instance has a solution if and only if the original Turing machine accepts the given input word. " +
      "The toggle therefore lets you explicitly observe the final step that transfers undecidability from MPCP to PCP." +
      "</p>",

 
    "help.main_tool.title": "What this tool does",
    "help.main_tool.body_html":
      "<p>" +
      "This webtool implements a <strong>classical reduction from the Turing Machine Acceptance Problem to the (Modified) Post Correspondence Problem</strong>. " +
      "Its goal is to make concrete one of the central ideas of <em>computability theory</em>: " +
      "showing that a problem is <strong>undecidable</strong> by reducing a known undecidable problem to it." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Turing Machines and the Acceptance Problem</h4>" +
      "<p>" +
      "<strong>Turing Machines (TM)</strong> are a foundational model of computation. " +
      "Given a Turing machine <code>M</code> and an input word <code>w</code>, the <em>Acceptance Problem</em> asks:" +
      "</p>" +
      "<p style=\"margin-left:1em;\"><em>Does M eventually halt and accept w?</em></p>" +
      "<p>" +
      "This problem is known to be <strong>undecidable</strong>: there is no algorithm that can correctly answer this question for all possible machines and inputs." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">What is PCP?</h4>" +
      "<p>" +
      "An instance of the <strong>Post Correspondence Problem (PCP)</strong> is a finite set of dominoes (also called tiles). " +
      "Each domino has a <em>top</em> string and a <em>bottom</em> string, e.g.:" +
      "</p>" +

      "<div style=\"margin-left:1em;\">" +
      "  <div style=\"display:inline-block; padding:0.2em 0.6em; border:1px solid var(--panel-border); border-radius:0.5rem;\">" +
      "    <div style=\"text-align:center; font-family:monospace;\">ab</div>" +
      "    <div style=\"border-top:1px solid var(--panel-border);\"></div>" +
      "    <div style=\"text-align:center; font-family:monospace;\">a</div>" +
      "  </div>" +
      "</div>" +

      "<p>" +
      "A <strong>solution</strong> is a <em>non-empty sequence of indices</em> (you may reuse dominoes) such that, when you concatenate the chosen <em>top</em> strings " +
      "in order, you get exactly the same word as concatenating the chosen <em>bottom</em> strings in order." +
      "</p>" +

      "<p><strong>Example.</strong> Suppose we have two dominoes:</p>" +
      "<ul>" +
      "  <li>1: (<code>a</code> / <code>ab</code>)</li>" +
      "  <li>2: (<code>ba</code> / <code>a</code>)</li>" +
      "</ul>" +
      "<p>" +
      "Try the sequence (1,2): top concatenation is <code>a · ba = aba</code>, bottom concatenation is <code>ab · a = aba</code>. " +
      "So (1,2) is a PCP solution for this instance." +
      "</p>" +

      "<p>" +
      "PCP is a <strong>decision problem</strong>: given the set of dominoes, does <em>there exist</em> a solution sequence? " +
      "The remarkable fact is that PCP is <strong>undecidable</strong>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Why MPCP appears in reductions</h4>" +
      "<p>" +
      "Many textbook reductions first build an instance of <strong>Modified PCP (MPCP)</strong>, a variant where the solution is required to start with a designated first tile. " +
      "This extra constraint makes it easier to force a well-formed “start configuration” for the simulated computation." +
      "</p>" +

      "<p>" +
      "In this tool, we construct an MPCP instance from <code>(M,w)</code> so that:" +
      "</p>" +
      "<p style=\"margin-left:1em;\"><strong>M accepts w</strong> if and only if <strong>the constructed MPCP instance has a solution</strong>.</p>" +

      "<p>" +
      "Then, if you enable the toggle, the tool applies the standard transformation <em>MPCP ⇒ PCP</em>, producing an equivalent plain PCP instance." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">How the tool connects TMs to dominoes</h4>" +
      "<p>" +
      "The reduction is carried out using a <strong>domino construction</strong> that encodes valid configurations and transitions of the Turing machine as strings. " +
      "Each domino enforces a local consistency rule, and a full matching sequence corresponds to a valid accepting computation of the machine." +
      "</p>" +

      "<ul>" +
      "  <li>You load a Turing machine description from a <code>.mt</code> file and choose an input word <code>w</code>.</li>" +
      "  <li>The tool builds the corresponding <strong>MPCP instance</strong>, displayed as a structured set of dominoes.</li>" +
      "  <li>You can optionally convert this instance into a standard <strong>PCP</strong> instance using the classical <em>MPCP ⇒ PCP</em> transformation.</li>" +
      "</ul>" +

      "<p>" +
      "By exploring the generated dominoes, you can see how <strong>computation is encoded as string matching</strong>, " +
      "and how undecidability is transferred from one problem to another through a precise, mechanical reduction." +
      "</p>",


    "help.export_csv.title": "Export CSV",
    "help.export_csv.body_html":
      "<p>" +
      "This option exports the <em>currently displayed</em> domino set to a CSV file for offline inspection, annotation, or use in exercises." +
      "</p>" +
      "<ul>" +
      "  <li>If the tool is displaying an <strong>MPCP</strong> instance, the exported file contains the MPCP dominoes.</li>" +
      "  <li>If the <strong>PCP</strong> toggle is enabled, the exported file contains the derived PCP dominoes.</li>" +
      "</ul>" +
      "<p>" +
      "Each row of the CSV corresponds to a single domino, with its <em>top</em> and <em>bottom</em> strings explicitly listed. " +
      "This makes it easier to manually analyze possible matches or to reuse the instance in external tools or coursework." +
      "</p>" +
      "<p>" +
      "Note that the export reflects exactly what is shown on screen: changing the mode (MPCP vs. PCP) or the input machine " +
      "will change the contents of the exported file." +
      "</p>",

    "help.transition_table.title": "Transition table",
    "help.transition_table.body_html":
      "<p>" +
      "This table displays the <strong>transition function</strong> <strong>δ</strong> of the Turing machine, as parsed from the loaded <code>.mt</code> file. " +
      "It represents the <strong>program</strong> of the machine: all possible actions the machine can take depending on its current state and the symbol read from the tape." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">How to read the table</h4>" +
      "<p>" +
      "<strong>Rows</strong> correspond to machine states, while <strong>columns</strong> correspond to tape symbols that may be read under the head." +
      "</p>" +

      "<ul>" +
      "  <li>The <strong>first column</strong> always corresponds to the <strong>beginning-of-tape marker</strong>.</li>" +
      "  <li>The <strong>last column</strong> always corresponds to the <strong>blank symbol</strong>.</li>" +
      "  <li>All other columns represent the remaining symbols of the tape alphabet.</li>" +
      "</ul>" +

      "<p>" +
      "Each <strong>cell</strong> represents the transition δ(<em>state</em>, <em>symbol</em>) and is displayed in the form:" +
      "</p>" +

      "<p style=\"margin-left:1em; font-family:monospace;\">" +
      "(next&nbsp;state,&nbsp;written&nbsp;symbol,&nbsp;movement)" +
      "</p>" +

      "<p>" +
      "where the movement is typically <code>E</code> (left) or <code>D</code> (right)." +
      "</p>" +

      "<p>" +
      "An <strong>empty cell</strong> (shown as “–”) means that the transition is <strong>undefined</strong>. " +
      "If the machine ever reaches that state while reading that symbol, it has no valid move and the computation halts without accepting." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Special states and visual markers</h4>" +
      "<p>" +
      "The table uses visual cues to highlight important states:" +
      "</p>" +

      "<ul>" +
      "  <li>The <strong>initial state</strong> appears in the first row and is marked with a special arrow symbol.</li>" +
      "  <li><strong>Accepting (final) states</strong> are marked with a star symbol.</li>" +
      "  <li>If a state is both initial and accepting, both markers are shown.</li>" +
      "</ul>" +

      "<p>" +
      "These markings reflect the formal definition of the machine and make it easier to identify where computations begin and when they may accept." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Connection to the domino construction</h4>" +
      "<p>" +
      "Many dominoes generated by the tool — especially the <strong>move tiles</strong> — are derived directly from the transitions shown in this table. " +
      "Each transition is encoded as local string-matching constraints that ensure only valid computation steps can appear in a PCP solution." +
      "</p>" +

      "<p>" +
      "To help visualize this connection, the interface is interactive:" +
      "</p>" +

      "<ul>" +
      "  <li>When you select a domino in the <strong>domino palette</strong> or the <strong>workspace</strong>,</li>" +
      "  <li>the corresponding transition cell in this table is <strong>highlighted</strong>.</li>" +
      "</ul>" +

      "<p>" +
      "This highlighting shows exactly which Turing machine transition a given domino is enforcing, " +
      "making explicit how the global PCP instance encodes the step-by-step behavior of the machine." +
      "</p>",

    "help.domino_palette.title": "Domino palette",
    "help.domino_palette.body_html":
      "<p>" +
      "The <strong>domino palette</strong> lists all dominoes generated by the reduction from the Turing machine to " +
      "the <strong>(Modified) Post Correspondence Problem</strong>. Each domino represents a <em>local constraint</em> " +
      "that enforces part of a valid Turing machine computation." +
      "</p>" +

      "<p>" +
      "The palette is <strong>grouped and color-coded by construction step</strong>, allowing you to see which role " +
      "each domino plays in the reduction." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Interacting with dominoes</h4>" +
      "<ul>" +
      "  <li>You can <strong>drag</strong> a domino into the workspace to place it at a chosen position.</li>" +
      "  <li>You can <strong>double-click</strong> a domino to append it to the end of the workspace.</li>" +
      "</ul>" +

      "<p>" +
      "When you select a domino that encodes a Turing machine transition, the corresponding cell in the " +
      "<strong>transition table</strong> is automatically <strong>highlighted</strong>, showing exactly which rule of the machine " +
      "that domino represents." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">MPCP vs. PCP view</h4>" +
      "<p>" +
      "In <strong>MPCP mode</strong>, the palette includes a <em>designated first domino</em>, which must start any solution. " +
      "In <strong>PCP mode</strong>, this restriction is removed, and an additional construction step is shown, corresponding " +
      "to the transformation <em>MPCP ⇒ PCP</em>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Construction steps (domino groups)</h4>" +
      "<p>" +
      "The dominoes are generated in successive steps, each enforcing a specific property of the simulated computation. " +
      "Together, they ensure that a matching sequence exists <em>if and only if</em> the Turing machine accepts the input word." +
      "</p>" +

      "<ol>" +

      "  <li><strong>Step&nbsp;1 – Initial configuration:</strong> " +
      "  introduces a <em>designated first domino</em> that forces the sequence to start with the initial configuration of the machine. " +
      "  This domino encodes the initial state <code>q₀</code>, the left-end marker, and the input word <code>w</code>, ensuring that every solution " +
      "  begins with a correct encoding of the computation start.</li>" +

      "  <li><strong>Step&nbsp;2 – Right-moving transitions:</strong> " +
      "  for every transition δ(<code>q</code>,<code>a</code>) = (<code>q′</code>,<code>b</code>,D), a domino is added that locally encodes " +
      "  the effect of writing <code>b</code> and moving the head one position to the right.</li>" +

      "  <li><strong>Step&nbsp;3 – Left-moving transitions:</strong> " +
      "  for every transition δ(<code>q</code>,<code>a</code>) = (<code>q′</code>,<code>b</code>,E), a domino is added that encodes the left move. " +
      "  These dominoes involve an extra tape symbol to correctly shift the head position to the left.</li>" +

      "  <li><strong>Step&nbsp;4 – Symbol-copying dominoes:</strong> " +
      "  for every tape symbol <code>a</code>, a domino of the form <code>a/a</code> is added. " +
      "  These dominoes ensure that tape symbols not affected by a transition are copied unchanged between configurations.</li>" +

      "  <li><strong>Step&nbsp;5 – Boundary management:</strong> " +
      "  special dominoes involving the separator symbol <code>#</code> and the blank symbol are added. " +
      "  They guarantee proper alignment of consecutive configurations and correct handling of tape boundaries.</li>" +

      "  <li><strong>Step&nbsp;6 – Accepting-state propagation:</strong> " +
      "  once the accepting state <code>qA</code> is reached, these dominoes allow the accepting state symbol " +
      "  to propagate through the remaining string, independent of surrounding tape symbols.</li>" +

      "  <li><strong>Step&nbsp;7 – Termination domino:</strong> " +
      "  a final domino is added that allows the sequence to terminate <em>if and only if</em> the accepting state " +
      "  has been reached, completing the correspondence between solutions and accepting computations.</li>" +

      "  <li><strong>(PCP only) Step&nbsp;8 – MPCP ⇒ PCP conversion:</strong> " +
      "  additional dominoes with special synchronization symbols are introduced to eliminate the requirement of a fixed first domino. " +
      "  This step produces a standard PCP instance that has a solution exactly when the original MPCP instance does.</li>" +

      "</ol>" +


      "<p>" +
      "Each color in the palette corresponds to one of these steps, making it easier to understand how local string " +
      "constraints combine to simulate a full Turing machine computation." +
      "</p>" +

      "<p>" +
      "By assembling dominoes in the workspace, you are effectively attempting to build a <strong>valid computation history</strong>. " +
      "A successful match corresponds to an accepting run of the machine on the given input." +
      "</p>",

      "help.workspace.title": "Workspace (sequence of dominoes)",
      "help.workspace.body_html":
        "<p>" +
        "The <strong>workspace</strong> is the area where you build a <em>candidate solution</em> for the " +
        "<strong>(Modified) Post Correspondence Problem</strong> by arranging a sequence of dominoes." +
        "</p>" +

        "<p>" +
        "Each domino has a <strong>top string</strong> and a <strong>bottom string</strong>. " +
        "The tool concatenates all top strings (from left to right) and all bottom strings, " +
        "and continuously checks whether the two resulting strings are equal." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">MPCP vs. PCP behavior</h4>" +
        "<ul>" +
        "  <li><strong>MPCP mode:</strong> the first domino is <strong>fixed</strong> and already placed in the workspace, " +
        "  reflecting the requirement that every MPCP solution must start with a designated first tile.</li>" +
        "  <li><strong>PCP mode:</strong> the workspace starts empty, since PCP solutions may begin with any domino.</li>" +
        "</ul>" +

        "<h4 style=\"margin-top:0.8em;\">Colors and visual cues</h4>" +
        "<p>" +
        "Dominoes in the workspace keep the same <strong>colors</strong> as in the domino palette. " +
        "These colors indicate the <em>construction step</em> from which each domino originates, " +
        "helping you track which logical role it plays in the reduction." +
        "</p>" +

        "<p>" +
        "If a domino corresponds to a specific Turing machine transition, selecting it will " +
        "<strong>highlight the corresponding cell</strong> in the transition table, " +
        "making the connection between the PCP sequence and the simulated computation explicit." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Interacting with the workspace</h4>" +
        "<ul>" +
        "  <li>You can <strong>drag</strong> a domino within the workspace to change its position in the sequence.</li>" +
        "  <li>You can <strong>remove</strong> a domino by using the delete button.</li>" +
        "  <li>The <strong>Clear workspace</strong> button removes all dominoes from the workspace " +
        "  (except for the fixed first domino in MPCP mode).</li>" +
        "</ul>" +

        "<h4 style=\"margin-top:0.8em;\">Concatenated strings view</h4>" +
        "<p>" +
        "Below the workspace, the tool shows the <strong>concatenated top string</strong> and " +
        "<strong>concatenated bottom string</strong> corresponding to the current sequence of dominoes." +
        "</p>" +

        "<p>" +
        "The <strong>“Wrap concatenated strings”</strong> checkbox controls how these strings are displayed: " +
        "when enabled, long strings are wrapped across multiple lines to improve readability; " +
        "when disabled, each string is shown on a single horizontal line." +
        "</p>" +

        "<p>" +
        "A sequence is a <strong>valid solution</strong> exactly when the two concatenated strings are identical. " +
        "In that case, the workspace represents an accepting computation of the original Turing machine " +
        "on the chosen input word." +
        "</p>",


    "help.solver_bounded.title": "(M)PCP Solver (bounded)",
    "help.solver_bounded.body_html":
      "<p>" +
      "This solver attempts to find a solution for the <strong>(Modified) Post Correspondence Problem</strong> instance " +
      "currently displayed in the tool." +
      "</p>" +

      "<p>" +
      "<strong>Important:</strong> PCP is <em>undecidable</em>. This means that <strong>no algorithm</strong> can correctly decide, " +
      "for every possible instance, whether a solution exists." +
      "</p>" +

      "<p>" +
      "The solver therefore does <em>not</em> contradict undecidability: it performs a <strong>bounded search</strong>. " +
      "It explores possible domino sequences only up to user-defined limits on <em>depth</em>, <em>time</em>, and <em>number of explored states</em>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">How the solver works</h4>" +
      "<p>" +
      "The implementation follows a classical <strong>incremental prefix-matching search</strong> strategy, inspired by:" +
      "</p>" +

      "<ul>" +
      "  <li>Ling Zhao, <em>\"Solving the Post Correspondence Problem\"</em>, PhD thesis, Chapter 2.2</li>" +
      "  <li>Arne Vogel’s PCP solver and blog explanation</li>" +
      "</ul>" +

      "<p>" +
      "The solver incrementally builds sequences of domino indices and keeps only those that remain <em>prefix-consistent</em>:" +
      "</p>" +

      "<pre style=\"background:var(--panel-bg); padding:0.6em; border-radius:0.5rem;\">" +
      "// Pseudocode (simplified)\n" +
      "solutions := all single-tile sequences that are prefix-consistent\n\n" +
      "for depth = 1 .. maxDepth:\n" +
      "  newSolutions := {}\n" +
      "  for seq in solutions:\n" +
      "    for each domino j:\n" +
      "      if concat(top(seq)+top(j)) and concat(bottom(seq)+bottom(j))\n" +
      "         are prefix-compatible:\n" +
      "         add (seq + j) to newSolutions\n\n" +
      "  if any seq in newSolutions has equal top and bottom concatenations:\n" +
      "     return seq  // solution found\n\n" +
      "  solutions := newSolutions\n\n" +
      "stop when limits are reached\n" +
      "</pre>" +

      "<p>" +
      "Prefix-incompatible sequences are discarded early, which prunes the search space but does not make it finite in general." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Why bounded search does not contradict undecidability</h4>" +
      "<p>" +
      "If the solver finds a solution, that solution is <strong>correct</strong>. " +
      "If it stops without finding one, this does <strong>not</strong> mean that no solution exists — " +
      "the solution may simply require greater depth or more time than allowed." +
      "</p>" +

      "<p>" +
      "This asymmetry is exactly what undecidability predicts: " +
      "<em>positive instances may eventually be found, but negative instances cannot be certified in general</em>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Solver controls</h4>" +
      "<ul>" +
      "  <li><strong>Try solve:</strong> starts the bounded search with the current parameters.</li>" +
      "  <li><strong>Cancel:</strong> interrupts the running search immediately.</li>" +
      "  <li><strong>Load solution into workspace:</strong> if a solution was found, " +
      "      inserts the corresponding domino sequence into the workspace for inspection.</li>" +
      "</ul>" +

      "<p>" +
      "When the solver stops, the interface reports whether a solution was found, " +
      "or which limit (depth, time, or node count) caused the search to terminate." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Common misconceptions</h4>" +
      "<ul>" +
      "  <li><strong>“The solver did not find a solution, so none exists.”</strong><br>" +
      "      This is <em>not</em> correct. Because the search is bounded, the solver may stop before reaching a valid solution, " +
      "      even if one exists at a greater depth or requires exploring more states.</li>" +

      "  <li><strong>“Increasing the limits makes the solver a decision procedure.”</strong><br>" +
      "      Also false. No finite choice of limits can turn this solver into a general algorithm for PCP. " +
      "      Undecidability means that some instances require arbitrarily long searches, and some have no solution at all.</li>" +

      "  <li><strong>“Solver failure contradicts undecidability.”</strong><br>" +
      "      On the contrary: the solver’s behavior illustrates undecidability in practice. " +
      "      Solutions, when they exist, may eventually be found; non-solutions cannot be reliably detected.</li>" +
      "</ul>" +

      "<p style=\"margin-top:0.8em; font-size:0.9em;\">" +
      "<em>Credits:</em> Algorithm inspired by Ling Zhao (Chapter 2.2) and Arne Vogel. " +
      "JavaScript implementation adapted and integrated for educational use in this tool." +
      "</p>",

    "help.solver_max_depth.title": "Max depth",
    "help.solver_max_depth.body_html":
      "<p>" +
      "This parameter sets the <strong>maximum length</strong> of the domino sequence that the solver is allowed to explore." +
      "</p>" +

      "<p>" +
      "A depth of <code>d</code> means that the solver will only consider sequences containing at most <code>d</code> dominoes." +
      "</p>" +

      "<p>" +
      "Increasing the maximum depth improves the chance of finding solutions that require long sequences, " +
      "but the search space grows <strong>exponentially</strong> with depth." +
      "</p>" +

      "<p>" +
      "If the solver stops due to the depth limit, a solution may still exist at a greater depth." +
      "</p>",

    "help.solver_time_limit.title": "Time limit (ms)",
    "help.solver_time_limit.body_html":
      "<p>" +
      "This parameter sets the <strong>maximum wall-clock time</strong> (in milliseconds) that the solver is allowed to run." +
      "</p>" +

      "<p>" +
      "If the time limit is reached, the solver stops immediately, even if unexplored search states remain." +
      "</p>" +

      "<p>" +
      "Time limits are essential to keep the interface responsive, especially since PCP search can grow very quickly." +
      "</p>" +

      "<p>" +
      "Stopping due to a time limit does <strong>not</strong> imply that no solution exists." +
      "</p>",

    "help.solver_node_limit.title": "Node limit",
    "help.solver_node_limit.body_html":
      "<p>" +
      "This parameter sets the <strong>maximum number of search states (nodes)</strong> that the solver may expand." +
      "</p>" +

      "<p>" +
      "Each node corresponds to a partial domino sequence that is still prefix-consistent." +
      "</p>" +

      "<p>" +
      "Limiting the number of nodes directly restricts memory usage and prevents the solver from exhausting system resources." +
      "</p>" +

      "<p>" +
      "As with other bounds, reaching the node limit does <strong>not</strong> imply that the instance has no solution." +
      "</p>",

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
    "label.wrap_strings": "Quebrar linhas das strings",


    // Palette / workspace notes
    "note.palette":
      "Os dominós são agrupados e coloridos por etapa da construção. Quando “PCPM ⇒ PCP” está marcado, você vê a instância de PCP, ainda separada pelas etapas originais.",
    "note.workspace":
      "Arraste os dominós para cá na ordem desejada. Você pode reordenar ou apagar dominós individualmente. As strings Topo/Base abaixo são coloridas de acordo com a etapa de cada símbolo.",

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
    "solver.title_mpcp": "Resolvedor PCPM (busca limitada)",

    // Help modal (corpo com HTML)

    "help.mt_file.title": "Sobre o arquivo .mt",
    "help.mt_file.body_html":
      "<p>" +
      "Esta ferramenta espera um arquivo <code>.mt</code> que descreve uma <strong>máquina de Turing determinística de uma única fita</strong>, " +
      "utilizando o formato adotado pelo <em>Simulador de Máquina de Turing</em> do Prof. Rodrigo Machado." +
      "</p>" +

      "<p>" +
      "Do ponto de vista conceitual, esse arquivo fornece uma <strong>definição formal</strong> da máquina <code>M</code> que será posteriormente " +
      "codificada como uma instância do Problema da Correspondência de Post (Modificado)." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Quais informações o arquivo contém</h4>" +
      "<p>O arquivo <code>.mt</code> especifica:</p>" +

      "<ul>" +
      "  <li>O <strong>alfabeto de entrada</strong> <strong>Σ</strong>, utilizado na palavra de entrada inicial.</li>" +
      "  <li>O <strong>alfabeto da fita</strong> <strong>Γ</strong>, que inclui Σ e símbolos auxiliares adicionais.</li>" +
      "  <li>Um <strong>símbolo branco</strong> (blank), que representa células vazias da fita.</li>" +
      "  <li>Um <strong>símbolo marcador</strong> especial, utilizado internamente para delimitar configurações.</li>" +
      "  <li>Um conjunto finito de <strong>estados</strong>, incluindo o <strong>estado inicial</strong> e um ou mais <strong>estados de aceitação</strong>.</li>" +
      "  <li>A <strong>função de transição</strong>, fornecida na forma de uma tabela de transições.</li>" +
      "</ul>" +

      "<p>" +
      "Cada transição possui a forma padrão:" +
      "</p>" +

      "<p style=\"margin-left:1em; font-family:monospace;\">" +
      "(estado&nbsp;atual,&nbsp;símbolo&nbsp;lido) → (próximo&nbsp;estado,&nbsp;símbolo&nbsp;escrito,&nbsp;movimento&nbsp;do&nbsp;cabeçote)" +
      "</p>" +

      "<p>" +
      "em que o movimento do cabeçote é tipicamente <code>E</code> (esquerda) ou <code>D</code> (direita)." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Como a ferramenta usa o arquivo .mt</h4>" +
      "<p>" +
      "Após o carregamento do arquivo, a ferramenta interpreta seu conteúdo e exibe abaixo a <strong>tabela de transições</strong>. " +
      "Essa tabela não é apenas visual: ela constitui o <strong>núcleo semântico</strong> da redução." +
      "</p>" +

      "<p>" +
      "A partir da tabela de transições, a ferramenta constrói sistematicamente dominós que codificam:" +
      "</p>" +

      "<ul>" +
      "  <li><strong>configurações iniciais válidas</strong> para a palavra de entrada <code>w</code>,</li>" +
      "  <li><strong>passos de simulação válidos</strong> da máquina de Turing,</li>" +
      "  <li>e <strong>configurações de aceitação</strong> que testemunham a aceitação.</li>" +
      "</ul>" +

      "<p>" +
      "O conjunto de dominós resultante possui uma solução se, e somente se, a máquina de Turing descrita no arquivo <code>.mt</code> " +
      "aceita a palavra de entrada escolhida." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Como criar arquivos .mt</h4>" +
      "<p>" +
      "É possível criar e testar arquivos <code>.mt</code> compatíveis utilizando o simulador online disponível em:" +
      "</p>" +

      "<p style=\"margin-left:1em;\">" +
      "<a href=\"https://www.inf.ufrgs.br/~rma/simuladores/turing.html\" target=\"_blank\" rel=\"noopener\">" +
      "https://www.inf.ufrgs.br/~rma/simuladores/turing.html</a>" +
      "</p>" +

      "<p>" +
      "As máquinas definidas nesse simulador podem ser exportadas diretamente e carregadas aqui, " +
      "facilitando a transição entre <strong>simulação operacional</strong> e <strong>reduções formais e provas de indecidibilidade</strong>." +
      "</p>",

      "help.input_word.title": "Sobre a palavra de entrada",
      "help.input_word.body_html":
        "<p>" +
        "Este campo especifica a <strong>palavra de entrada</strong> <code>w</code> fornecida à máquina de Turing <code>M</code>. " +
        "A ferramenta verifica os símbolos de <code>w</code> em relação ao <strong>alfabeto de entrada</strong> <strong>Σ</strong>, " +
        "conforme definido no arquivo <code>.mt</code> carregado." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Regras de validação</h4>" +
        "<ul>" +
        "  <li><strong>Verificação do alfabeto:</strong> todo caractere de <code>w</code> deve pertencer a Σ.</li>" +
        "  <li><strong>Símbolos inválidos:</strong> se <code>w</code> contiver algum símbolo que não pertence a Σ, a ferramenta indica um erro e a instância não é gerada.</li>" +
        "  <li><strong>Espaços:</strong> caracteres de espaço em branco (como os inseridos pela barra de espaço) são <strong>ignorados</strong> e não fazem parte da palavra.</li>" +
        "</ul>" +

        "<h4 style=\"margin-top:0.8em;\">A palavra vazia</h4>" +
        "<p>" +
        "A <strong>palavra vazia</strong> <code>ε</code> é sempre permitida, mesmo quando Σ é não vazio. " +
        "Quando <code>w = ε</code>, a ferramenta constrói a configuração inicial da máquina de Turing sem símbolos de entrada na fita, " +
        "exceto pelos símbolos marcador e branco necessários para a simulação." +
        "</p>" +

        "<p>" +
        "Nesse caso, os dominós gerados codificam a computação de <code>M</code> iniciando a partir da fita vazia, " +
        "exatamente como na definição formal de aceitação de uma máquina de Turing para a entrada vazia." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Como a palavra de entrada é usada na redução</h4>" +
        "<p>" +
        "A construção com dominós codifica a computação de <code>M</code> sobre <code>w</code> como uma instância do <strong>Problema da Correspondência de Post Modificado (PCPM)</strong>. " +
        "A palavra de entrada aparece explicitamente nos dominós que representam a <strong>configuração inicial</strong> da máquina." +
        "</p>" +

        "<p>" +
        "Se a opção correspondente estiver ativada, a ferramenta aplica então a transformação padrão de <strong>PCPM</strong> para <strong>PCP</strong>, " +
        "produzindo uma instância equivalente de PCP cujas soluções correspondem exatamente a computações aceitantes de <code>M</code> sobre <code>w</code>." +
        "</p>" +

        "<p>" +
        "Assim, alterar a palavra de entrada modifica diretamente a configuração inicial que está sendo simulada " +
        "e, consequentemente, o conjunto de dominós gerado pela redução." +
        "</p>",

      "help.mpcp_to_pcp.title": "Alternância PCPM ⇒ PCP",
      "help.mpcp_to_pcp.body_html":
        "<p>" +
        "Esta opção controla se a ferramenta exibe uma instância do <strong>Problema da Correspondência de Post Modificado (PCPM)</strong> " +
        "ou a instância correspondente do <strong>Problema da Correspondência de Post (PCP)</strong> padrão." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">PCP vs. PCPM</h4>" +
        "<p>" +
        "No <strong>Problema da Correspondência de Post (PCP)</strong>, uma solução é qualquer sequência não vazia de dominós tal que, " +
        "após a concatenação das strings superiores e inferiores, ambas sejam idênticas. " +
        "Não há <em>nenhuma restrição</em> sobre qual dominó deve aparecer primeiro." +
        "</p>" +

        "<p>" +
        "O <strong>PCP Modificado (PCPM)</strong> adiciona uma única restrição: a sequência solução deve <strong>começar com um dominó inicial específico</strong>. " +
        "Fora essa exigência, a condição de correspondência é a mesma do PCP." +
        "</p>" +

        "<p>" +
        "Essa restrição extra é extremamente útil em reduções a partir de máquinas de Turing, pois permite " +
        "forçar uma <strong>configuração inicial bem definida</strong> da computação simulada." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Por que a ferramenta constrói primeiro um PCPM</h4>" +
        "<p>" +
        "Nesta ferramenta, a construção com dominós que simula a computação de uma máquina de Turing resulta naturalmente " +
        "em uma instância de <strong>PCPM</strong>. O dominó inicial fixo codifica a configuração inicial da fita para a palavra de entrada escolhida " +
        "e garante que toda solução válida corresponda a uma computação real iniciada corretamente." +
        "</p>" +

        "<p>" +
        "Quando a opção está <strong>desmarcada</strong>, a paleta exibe essa instância de PCPM. " +
        "O primeiro dominó é fixo e já aparece automaticamente no início do espaço de trabalho." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Como a ferramenta transforma PCPM em PCP</h4>" +
        "<p>" +
        "Quando a opção está <strong>marcada</strong>, a ferramenta aplica a redução clássica <strong>PCPM ⇒ PCP</strong>. " +
        "Essa transformação remove a exigência de um dominó inicial fixo, preservando a existência (ou não) de soluções." +
        "</p>" +

        "<p>" +
        "A ideia central da transformação é <strong>codificar a escolha forçada do primeiro dominó usando símbolos especiais</strong>. " +
        "A ferramenta modifica sistematicamente as strings dos dominós por meio da concatenação desses símbolos, de forma que:" +
        "</p>" +

        "<ul>" +
        "  <li>qualquer solução válida de PCP necessariamente simule o dominó inicial exigido no PCPM,</li>" +
        "  <li>e toda solução de PCP corresponda exatamente a uma solução do PCPM original, e vice-versa.</li>" +
        "</ul>" +

        "<p>" +
        "Intuitivamente, esses símbolos especiais funcionam como um <em>mecanismo de sincronização</em>, " +
        "forçando o início correto da sequência sem precisar fixar explicitamente o primeiro dominó." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Efeito no espaço de trabalho</h4>" +
        "<ul>" +
        "  <li><strong>Modo PCPM:</strong> o espaço de trabalho já começa com o dominó inicial obrigatório fixado.</li>" +
        "  <li><strong>Modo PCP:</strong> o espaço de trabalho começa vazio, pois soluções de PCP podem iniciar com qualquer dominó.</li>" +
        "</ul>" +

        "<p>" +
        "Em ambos os modos, a instância resultante possui solução se, e somente se, a máquina de Turing original aceita a palavra de entrada. " +
        "Essa opção permite observar explicitamente a etapa final que transfere a indecidibilidade do PCPM para o PCP." +
        "</p>",


    "help.main_tool.title": "O que esta ferramenta faz",
    "help.main_tool.body_html":
      "<p>" +
      "Esta ferramenta web implementa uma <strong>redução clássica do Problema da Aceitação de Máquinas de Turing para o (Modificado) Problema da Correspondência de Post</strong>. " +
      "Seu objetivo é tornar concreto um dos conceitos centrais da <em>teoria da computação</em>: " +
      "mostrar que um problema é <strong>indecidível</strong> reduzindo um problema já conhecido como indecidível a ele." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Máquinas de Turing e o Problema da Aceitação</h4>" +
      "<p>" +
      "<strong>Máquinas de Turing (MT)</strong> são um modelo fundamental de computação. " +
      "Dada uma máquina de Turing <code>M</code> e uma palavra de entrada <code>w</code>, o <em>Problema da Aceitação</em> pergunta:" +
      "</p>" +
      "<p style=\"margin-left:1em;\"><em>M eventualmente pára e aceita w?</em></p>" +
      "<p>" +
      "Esse problema é conhecido como <strong>indecidível</strong>: não existe algoritmo capaz de responder corretamente a essa pergunta para todas as máquinas e entradas possíveis." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">O que é o PCP?</h4>" +
      "<p>" +
      "Uma instância do <strong>Problema da Correspondência de Post (PCP)</strong> consiste em um conjunto finito de dominós (também chamados de peças ou blocos). " +
      "Cada dominó possui uma string <em>superior</em> e uma string <em>inferior</em>, por exemplo:" +
      "</p>" +

      "<div style=\"margin-left:1em;\">" +
      "  <div style=\"display:inline-block; padding:0.2em 0.6em; border:1px solid var(--panel-border); border-radius:0.5rem;\">" +
      "    <div style=\"text-align:center; font-family:monospace;\">ab</div>" +
      "    <div style=\"border-top:1px solid var(--panel-border);\"></div>" +
      "    <div style=\"text-align:center; font-family:monospace;\">a</div>" +
      "  </div>" +
      "</div>" +

      "<p>" +
      "Uma <strong>solução</strong> é uma <em>sequência não vazia de índices</em> (é permitido reutilizar dominós) tal que, ao concatenar as strings <em>superiores</em> " +
      "na ordem escolhida, obtemos exatamente a mesma palavra que ao concatenar as strings <em>inferiores</em>." +
      "</p>" +

      "<p><strong>Exemplo.</strong> Suponha que temos dois dominós:</p>" +
      "<ul>" +
      "  <li>1: (<code>a</code> / <code>ab</code>)</li>" +
      "  <li>2: (<code>ba</code> / <code>a</code>)</li>" +
      "</ul>" +
      "<p>" +
      "Considere a sequência (1,2): a concatenação superior é <code>a · ba = aba</code>, e a concatenação inferior é <code>ab · a = aba</code>. " +
      "Logo, (1,2) é uma solução de PCP para essa instância." +
      "</p>" +

      "<p>" +
      "O PCP é um <strong>problema de decisão</strong>: dado um conjunto de dominós, existe ou não uma sequência solução? " +
      "O fato notável é que o PCP é <strong>indecidível</strong>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Por que o PCPM aparece em reduções</h4>" +
      "<p>" +
      "Muitas reduções clássicas constroem primeiro uma instância do <strong>PCP Modificado (PCPM)</strong>, uma variante em que a solução deve começar com um dominó inicial específico. " +
      "Essa restrição adicional facilita forçar uma “configuração inicial” bem definida para a computação simulada." +
      "</p>" +

      "<p>" +
      "Nesta ferramenta, construímos uma instância de PCPM a partir de <code>(M,w)</code> tal que:" +
      "</p>" +
      "<p style=\"margin-left:1em;\"><strong>M aceita w</strong> se, e somente se, <strong>a instância de PCPM construída possui uma solução</strong>.</p>" +

      "<p>" +
      "Em seguida, se o usuário ativar a opção correspondente, a ferramenta aplica a transformação padrão <em>PCPM ⇒ PCP</em>, produzindo uma instância equivalente do PCP tradicional." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Como a ferramenta conecta MTs a dominós</h4>" +
      "<p>" +
      "A redução é realizada por meio de uma <strong>construção com dominós</strong> que codifica configurações e transições válidas da máquina de Turing como strings. " +
      "Cada dominó impõe uma regra local de consistência, e uma sequência completa que casa corretamente corresponde a uma computação aceitante válida da máquina." +
      "</p>" +

      "<ul>" +
      "  <li>Você carrega a descrição de uma máquina de Turing a partir de um arquivo <code>.mt</code> e escolhe uma palavra de entrada <code>w</code>.</li>" +
      "  <li>A ferramenta constrói a instância correspondente de <strong>PCPM</strong>, exibida como um conjunto estruturado de dominós.</li>" +
      "  <li>Opcionalmente, você pode converter essa instância em uma instância padrão de <strong>PCP</strong> usando a transformação clássica <em>PCPM ⇒ PCP</em>.</li>" +
      "</ul>" +

      "<p>" +
      "Ao explorar os dominós gerados, é possível observar como <strong>computação é codificada como casamento de strings</strong> " +
      "e como a indecidibilidade é transferida de um problema para outro por meio de uma redução precisa e mecânica." +
      "</p>",


    "help.export_csv.title": "Exportar CSV",
    "help.export_csv.body_html":
      "<p>" +
      "Esta opção exporta o conjunto de dominós <em>atualmente exibido</em> para um arquivo CSV, permitindo análise offline, anotações ou uso em exercícios." +
      "</p>" +
      "<ul>" +
      "  <li>Se a ferramenta estiver exibindo uma instância de <strong>PCPM</strong>, o arquivo exportado conterá os dominós do PCPM.</li>" +
      "  <li>Se a opção de <strong>PCP</strong> estiver ativada, o arquivo conterá os dominós da instância de PCP derivada.</li>" +
      "</ul>" +
      "<p>" +
      "Cada linha do CSV corresponde a um único dominó, com suas strings <em>superior</em> e <em>inferior</em> explicitamente listadas. " +
      "Isso facilita a análise manual de possíveis sequências solução ou a reutilização da instância em outras ferramentas ou atividades didáticas." +
      "</p>" +
      "<p>" +
      "Observe que a exportação reflete exatamente o que está visível na tela: alterar o modo (PCPM vs. PCP) ou a máquina de entrada " +
      "modificará o conteúdo do arquivo exportado." +
      "</p>",

    "help.transition_table.title": "Tabela de transições",
    "help.transition_table.body_html":
      "<p>" +
      "Esta tabela exibe a <strong>função de transição</strong> <strong>δ</strong> da máquina de Turing, conforme extraída do arquivo <code>.mt</code> carregado. " +
      "Ela representa o <strong>programa</strong> da máquina: todas as ações possíveis que a máquina pode executar dependendo do estado atual " +
      "e do símbolo lido na fita." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Como ler a tabela</h4>" +
      "<p>" +
      "As <strong>linhas</strong> correspondem aos estados da máquina, enquanto as <strong>colunas</strong> correspondem aos símbolos da fita " +
      "que podem estar sob o cabeçote de leitura/escrita." +
      "</p>" +

      "<ul>" +
      "  <li>A <strong>primeira coluna</strong> corresponde sempre ao <strong>símbolo marcador de início da fita</strong>.</li>" +
      "  <li>A <strong>última coluna</strong> corresponde sempre ao <strong>símbolo branco</strong>.</li>" +
      "  <li>As colunas intermediárias representam os demais símbolos do alfabeto da fita.</li>" +
      "</ul>" +

      "<p>" +
      "Cada <strong>célula</strong> representa a transição δ(<em>estado</em>, <em>símbolo</em>) e é exibida no formato:" +
      "</p>" +

      "<p style=\"margin-left:1em; font-family:monospace;\">" +
      "(próximo&nbsp;estado,&nbsp;símbolo&nbsp;escrito,&nbsp;movimento)" +
      "</p>" +

      "<p>" +
      "em que o movimento é tipicamente <code>E</code> (esquerda) ou <code>D</code> (direita)." +
      "</p>" +

      "<p>" +
      "Uma <strong>célula vazia</strong> (exibida como “–”) indica que a transição é <strong>indefinida</strong>. " +
      "Se a máquina alcançar esse estado lendo esse símbolo, não existe movimento válido e a computação é interrompida sem aceitar." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Estados especiais e marcações visuais</h4>" +
      "<p>" +
      "A tabela utiliza indicações visuais para destacar estados importantes:" +
      "</p>" +

      "<ul>" +
      "  <li>O <strong>estado inicial</strong> aparece na primeira linha e é marcado com um símbolo de seta.</li>" +
      "  <li>Os <strong>estados de aceitação (finais)</strong> são marcados com um símbolo de estrela.</li>" +
      "  <li>Se um estado for ao mesmo tempo inicial e de aceitação, ambas as marcações são exibidas.</li>" +
      "</ul>" +

      "<p>" +
      "Essas marcações refletem a definição formal da máquina e facilitam a identificação de onde a computação começa " +
      "e em quais estados ela pode aceitar." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Conexão com a construção por dominós</h4>" +
      "<p>" +
      "Muitos dos dominós gerados pela ferramenta — especialmente os <strong>dominós de movimento</strong> — " +
      "são derivados diretamente das transições exibidas nesta tabela. " +
      "Cada transição é codificada como restrições locais de casamento de strings, garantindo que apenas passos válidos da computação " +
      "possam aparecer em uma solução do PCP." +
      "</p>" +

      "<p>" +
      "Para tornar essa conexão explícita, a interface é interativa:" +
      "</p>" +

      "<ul>" +
      "  <li>Quando você seleciona um dominó na <strong>paleta de dominós</strong> ou na <strong>área de trabalho</strong>,</li>" +
      "  <li>a célula correspondente nesta tabela é automaticamente <strong>destacada</strong>.</li>" +
      "</ul>" +

      "<p>" +
      "Esse destaque mostra exatamente qual transição da máquina de Turing está sendo imposta por um determinado dominó, " +
      "evidenciando como a instância global de PCP codifica o comportamento passo a passo da máquina." +
      "</p>",


    "help.domino_palette.title": "Paleta de dominós",
    "help.domino_palette.body_html":
      "<p>" +
      "A <strong>paleta de dominós</strong> lista todos os dominós gerados pela redução da máquina de Turing para o " +
      "<strong>Problema da Correspondência de Post (Modificado)</strong>. Cada dominó representa uma <em>restrição local</em> " +
      "necessária para codificar corretamente uma computação válida da máquina." +
      "</p>" +

      "<p>" +
      "Os dominós estão <strong>agrupados e coloridos de acordo com a etapa da construção</strong>, " +
      "permitindo identificar facilmente o papel teórico de cada peça dentro da redução." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Interação com os dominós</h4>" +
      "<ul>" +
      "  <li>Você pode <strong>arrastar</strong> um dominó da paleta para o espaço de trabalho.</li>" +
      "  <li>Você pode <strong>dar um duplo clique</strong> em um dominó para adicioná-lo ao final da sequência.</li>" +
      "</ul>" +

      "<p>" +
      "Quando um dominó que codifica uma transição da máquina de Turing é selecionado, " +
      "a célula correspondente na <strong>tabela de transições</strong> é automaticamente <strong>destacada</strong>, " +
      "mostrando exatamente qual regra da máquina aquele dominó está representando." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Visões PCPM e PCP</h4>" +
      "<p>" +
      "No <strong>modo PCPM</strong>, a paleta inclui um <em>dominó inicial obrigatório</em>, que deve iniciar qualquer solução. " +
      "No <strong>modo PCP</strong>, essa restrição é removida, e um grupo adicional de dominós é exibido, " +
      "correspondente à transformação <em>PCPM ⇒ PCP</em>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Etapas da construção (grupos de dominós)</h4>" +
      "<p>" +
      "Os dominós são gerados em etapas sucessivas, cada uma impondo uma propriedade essencial da computação simulada. " +
      "Em conjunto, essas etapas garantem que exista uma sequência de dominós válida <em>se, e somente se</em> " +
      "a máquina de Turing aceita a palavra de entrada." +
      "</p>" +

      "<ol>" +

      "  <li><strong>Etapa&nbsp;1 – Configuração inicial:</strong> " +
      "  introduz um <em>dominó inicial designado</em> que força o início da sequência a codificar a configuração inicial da máquina. " +
      "  Esse dominó representa o estado inicial <code>q₀</code>, o marcador de início da fita e a palavra de entrada <code>w</code>, " +
      "  garantindo que toda solução comece com a codificação correta do início da computação.</li>" +

      "  <li><strong>Etapa&nbsp;2 – Transições com movimento para a direita:</strong> " +
      "  para cada transição δ(<code>q</code>,<code>a</code>) = (<code>q′</code>,<code>b</code>,D), é adicionado um dominó que codifica localmente " +
      "  o efeito de escrever <code>b</code> e mover o cabeçote uma posição para a direita.</li>" +

      "  <li><strong>Etapa&nbsp;3 – Transições com movimento para a esquerda:</strong> " +
      "  para cada transição δ(<code>q</code>,<code>a</code>) = (<code>q′</code>,<code>b</code>,E), é adicionado um dominó que codifica o movimento para a esquerda. " +
      "  Esses dominós envolvem um símbolo adicional da fita para garantir o deslocamento correto do cabeçote.</li>" +

      "  <li><strong>Etapa&nbsp;4 – Dominós de cópia de símbolos:</strong> " +
      "  para cada símbolo da fita <code>a</code>, é adicionado um dominó da forma <code>a/a</code>. " +
      "  Esses dominós garantem que os símbolos da fita que não são alterados por uma transição sejam copiados " +
      "  inalterados entre configurações consecutivas.</li>" +

      "  <li><strong>Etapa&nbsp;5 – Gerenciamento de fronteiras:</strong> " +
      "  são adicionados dominós especiais envolvendo o símbolo separador <code>#</code> e o símbolo branco. " +
      "  Eles asseguram o alinhamento correto entre configurações sucessivas e o tratamento adequado das bordas da fita.</li>" +

      "  <li><strong>Etapa&nbsp;6 – Propagação do estado de aceitação:</strong> " +
      "  uma vez alcançado o estado de aceitação <code>qA</code>, esses dominós permitem que o símbolo do estado aceitante " +
      "  se propague pelo restante da string, independentemente dos símbolos da fita ao redor.</li>" +

      "  <li><strong>Etapa&nbsp;7 – Dominó de terminação:</strong> " +
      "  um dominó final é adicionado para permitir que a sequência termine <em>se, e somente se</em> " +
      "  o estado de aceitação tiver sido alcançado, completando a correspondência entre soluções e computações aceitantes.</li>" +

      "  <li><strong>(Apenas PCP) Etapa&nbsp;8 – Conversão PCPM ⇒ PCP:</strong> " +
      "  são introduzidos dominós adicionais com símbolos especiais de sincronização, que eliminam a necessidade " +
      "  de um dominó inicial fixo. Essa etapa produz uma instância padrão de PCP que possui solução " +
      "  exatamente quando a instância original de PCPM possui.</li>" +

      "</ol>" +

      "<p>" +
      "Cada cor na paleta corresponde a uma dessas etapas, facilitando a visualização de como restrições locais " +
      "de casamento de strings se combinam para simular uma computação completa da máquina de Turing." +
      "</p>" +

      "<p>" +
      "Ao montar uma sequência de dominós no espaço de trabalho, você está efetivamente tentando construir um " +
      "<strong>histórico de computação válido</strong>. Uma correspondência bem-sucedida representa uma execução " +
      "aceitante da máquina sobre a palavra de entrada escolhida." +
      "</p>",



      "help.workspace.title": "Área de trabalho (sequência de dominós)",
      "help.workspace.body_html":
        "<p>" +
        "A <strong>área de trabalho</strong> é o espaço onde você constrói uma <em>sequência candidata</em> de dominós para o " +
        "<strong>Problema da Correspondência de Post (Modificado)</strong>." +
        "</p>" +

        "<p>" +
        "Cada dominó possui uma <strong>string superior</strong> (topo) e uma <strong>string inferior</strong> (base). " +
        "A ferramenta concatena todas as strings superiores (da esquerda para a direita) e todas as strings inferiores, " +
        "verificando continuamente se as duas concatenações são idênticas." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Comportamento em PCPM e PCP</h4>" +
        "<ul>" +
        "  <li><strong>Modo PCPM:</strong> o primeiro dominó é <strong>fixo</strong> e já aparece na área de trabalho, " +
        "  refletindo a exigência de que toda solução de PCPM comece com um dominó inicial designado.</li>" +
        "  <li><strong>Modo PCP:</strong> a área de trabalho inicia vazia, pois soluções de PCP podem começar com qualquer dominó.</li>" +
        "</ul>" +

        "<h4 style=\"margin-top:0.8em;\">Cores e indicações visuais</h4>" +
        "<p>" +
        "Os dominós mantêm na área de trabalho as mesmas <strong>cores</strong> exibidas na paleta de dominós. " +
        "Essas cores indicam a <em>etapa da construção</em> da qual cada dominó se origina, " +
        "ajudando a identificar o papel lógico que ele desempenha na redução." +
        "</p>" +

        "<p>" +
        "Quando um dominó corresponde a uma transição específica da máquina de Turing, sua seleção faz com que " +
        "a célula correspondente na <strong>tabela de transições</strong> seja automaticamente <strong>destacada</strong>, " +
        "tornando explícita a relação entre a sequência de dominós e a computação simulada." +
        "</p>" +

        "<h4 style=\"margin-top:0.8em;\">Interação com a área de trabalho</h4>" +
        "<ul>" +
        "  <li>Você pode <strong>arrastar</strong> um dominó dentro da área de trabalho para alterar sua posição na sequência.</li>" +
        "  <li>Você pode <strong>remover</strong> um dominó usando o botão de exclusão.</li>" +
        "  <li>O botão <strong>Limpar área de trabalho</strong> remove todos os dominós da área de trabalho " +
        "  (exceto o dominó inicial fixo no modo PCPM).</li>" +
        "</ul>" +

        "<h4 style=\"margin-top:0.8em;\">Visualização das strings concatenadas</h4>" +
        "<p>" +
        "Abaixo da área de trabalho, a ferramenta exibe a <strong>string superior concatenada</strong> e a " +
        "<strong>string inferior concatenada</strong> correspondentes à sequência atual de dominós." +
        "</p>" +

        "<p>" +
        "A opção <strong>“Quebrar linhas das strings”</strong> controla apenas a forma de exibição: " +
        "quando ativada, strings longas são quebradas em várias linhas para facilitar a leitura; " +
        "quando desativada, cada string é mostrada em uma única linha horizontal." +
        "</p>" +

        "<p>" +
        "Uma sequência constitui uma <strong>solução válida</strong> exatamente quando as duas strings concatenadas são idênticas. " +
        "Nesse caso, a área de trabalho representa uma computação aceitante da máquina de Turing original " +
        "sobre a palavra de entrada escolhida." +
        "</p>",


    "help.solver_bounded.title": "Resolvedor de PCP(M) (limitado)",
    "help.solver_bounded.body_html":
      "<p>" +
      "Este solver tenta encontrar uma solução para a instância do <strong>Problema da Correspondência de Post (Modificado)</strong> " +
      "atualmente exibida na ferramenta." +
      "</p>" +

      "<p>" +
      "<strong>Importante:</strong> o PCP é <em>indecidível</em>. Isso significa que <strong>não existe algoritmo</strong> capaz de decidir corretamente, " +
      "para todas as instâncias possíveis, se uma solução existe ou não." +
      "</p>" +

      "<p>" +
      "Portanto, este solver <em>não</em> contradiz a indecidibilidade: ele realiza uma <strong>busca limitada</strong>. " +
      "A exploração de sequências de dominós é restringida por limites definidos pelo usuário em termos de <em>profundidade</em>, " +
      "<em>tempo</em> e <em>número de estados explorados</em>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Como o solver funciona</h4>" +
      "<p>" +
      "A implementação segue uma estratégia clássica de <strong>busca incremental com verificação de prefixos</strong>, " +
      "inspirada em:" +
      "</p>" +

      "<ul>" +
      "  <li>Ling Zhao, <em>“Solving the Post Correspondence Problem”</em>, tese de doutorado, Capítulo 2.2</li>" +
      "  <li>O solver e a explicação em blog de Arne Vogel</li>" +
      "</ul>" +

      "<p>" +
      "O solver constrói incrementalmente sequências de índices de dominós e mantém apenas aquelas que permanecem " +
      "<em>consistentes por prefixo</em>:" +
      "</p>" +

      "<pre style=\"background:var(--panel-bg); padding:0.6em; border-radius:0.5rem;\">" +
      "// Pseudocódigo (simplificado)\n" +
      "solucoes := todos os dominós individuais que são consistentes por prefixo\n\n" +
      "para profundidade = 1 .. maxDepth:\n" +
      "  novasSolucoes := {}\n" +
      "  para seq em solucoes:\n" +
      "    para cada dominó j:\n" +
      "      se concat(top(seq)+top(j)) e concat(bottom(seq)+bottom(j))\n" +
      "         são compatíveis por prefixo:\n" +
      "         adicionar (seq + j) a novasSolucoes\n\n" +
      "  se existir seq em novasSolucoes tal que top = bottom:\n" +
      "     retornar seq  // solução encontrada\n\n" +
      "  solucoes := novasSolucoes\n\n" +
      "parar quando algum limite for atingido\n" +
      "</pre>" +

      "<p>" +
      "Sequências que violam a compatibilidade de prefixo são descartadas imediatamente, o que reduz o espaço de busca, " +
      "mas não o torna finito em geral." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Por que busca limitada não contradiz indecidibilidade</h4>" +
      "<p>" +
      "Se o solver encontra uma solução, essa solução é <strong>correta</strong>. " +
      "Se ele termina sem encontrar uma solução, isso <strong>não</strong> significa que nenhuma solução existe — " +
      "a solução pode simplesmente exigir maior profundidade ou mais recursos do que os limites permitidos." +
      "</p>" +

      "<p>" +
      "Essa assimetria é exatamente o comportamento previsto pela indecidibilidade: " +
      "<em>instâncias positivas podem eventualmente ser reconhecidas, mas instâncias negativas não podem ser certificadas em geral</em>." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Controles do solver</h4>" +
      "<ul>" +
      "  <li><strong>Tentar resolver:</strong> inicia a busca limitada com os parâmetros atuais.</li>" +
      "  <li><strong>Cancelar:</strong> interrompe imediatamente a busca em execução.</li>" +
      "  <li><strong>Carregar solução na área de trabalho:</strong> se uma solução for encontrada, " +
      "      insere a sequência correspondente de dominós na área de trabalho para inspeção.</li>" +
      "</ul>" +

      "<p>" +
      "Quando o solver termina, a interface indica se uma solução foi encontrada " +
      "ou qual limite (profundidade, tempo ou número de nós) causou a interrupção da busca." +
      "</p>" +

      "<h4 style=\"margin-top:0.8em;\">Equívocos comuns</h4>" +
      "<ul>" +
      "  <li><strong>“O solver não encontrou solução, então ela não existe.”</strong><br>" +
      "      Isso é <em>falso</em>. Como a busca é limitada, o solver pode parar antes de alcançar uma solução válida, " +
      "      mesmo que ela exista em uma profundidade maior.</li>" +

      "  <li><strong>“Aumentar os limites transforma o solver em um algoritmo decisório.”</strong><br>" +
      "      Também é falso. Nenhuma escolha finita de limites pode transformar este solver em um algoritmo geral para o PCP. " +
      "      A indecidibilidade implica que algumas instâncias exigem buscas arbitrariamente longas, e outras não possuem solução.</li>" +

      "  <li><strong>“A falha do solver contradiz a indecidibilidade.”</strong><br>" +
      "      Pelo contrário: o comportamento do solver ilustra a indecidibilidade na prática. " +
      "      Soluções, quando existem, podem eventualmente ser encontradas; não-soluções não podem ser confirmadas de forma geral.</li>" +
      "</ul>" +

      "<p style=\"margin-top:0.8em; font-size:0.9em;\">" +
      "<em>Créditos:</em> Algoritmo inspirado em Ling Zhao (Cap. 2.2) e Arne Vogel. " +
      "Implementação em JavaScript adaptada e integrada para fins educacionais nesta ferramenta." +
      "</p>",


    "help.solver_max_depth.title": "Profundidade máxima",
    "help.solver_max_depth.body_html":
      "<p>" +
      "Este parâmetro define o <strong>comprimento máximo</strong> da sequência de dominós que o solver está autorizado a explorar." +
      "</p>" +

      "<p>" +
      "Uma profundidade <code>d</code> significa que o solver considerará apenas sequências com, no máximo, <code>d</code> dominós." +
      "</p>" +

      "<p>" +
      "Aumentar a profundidade máxima aumenta a chance de encontrar soluções que exigem sequências longas, " +
      "mas o espaço de busca cresce de forma <strong>exponencial</strong> com a profundidade." +
      "</p>" +

      "<p>" +
      "Se o solver parar devido ao limite de profundidade, ainda pode existir uma solução em uma profundidade maior." +
      "</p>",


    "help.solver_time_limit.title": "Limite de tempo (ms)",
    "help.solver_time_limit.body_html":
      "<p>" +
      "Este parâmetro define o <strong>tempo máximo de execução</strong> (em milissegundos) permitido para o solver." +
      "</p>" +

      "<p>" +
      "Ao atingir esse limite, a busca é interrompida imediatamente, mesmo que ainda existam estados de busca não explorados." +
      "</p>" +

      "<p>" +
      "Limites de tempo são essenciais para manter a interface responsiva, já que a busca no PCP pode crescer muito rapidamente." +
      "</p>" +

      "<p>" +
      "A interrupção por tempo <strong>não</strong> implica que a instância não possui solução." +
      "</p>",


    "help.solver_node_limit.title": "Limite de nós",
    "help.solver_node_limit.body_html":
      "<p>" +
      "Este parâmetro define o <strong>número máximo de estados de busca (nós)</strong> que o solver pode expandir." +
      "</p>" +

      "<p>" +
      "Cada nó corresponde a uma sequência parcial de dominós que ainda é consistente por prefixo." +
      "</p>" +

      "<p>" +
      "Limitar o número de nós restringe diretamente o uso de memória e evita que o solver esgote os recursos do sistema." +
      "</p>" +

      "<p>" +
      "Assim como nos demais limites, atingir o limite de nós <strong>não</strong> significa que a instância não possui solução." +
      "</p>",

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
    const sp = lbl.querySelector('[data-i18n="tm.table_label"]');
    if (sp) sp.textContent = t("tm.table_label");
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
