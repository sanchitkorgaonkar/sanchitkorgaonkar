// Interactives and small behaviours for the operating-model pages.
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // "You said: …" — shown when the visitor arrives from /start (?said=1)
  try {
    if (new URLSearchParams(location.search).get("said") === "1") {
      const said = $("[data-said]");
      if (said) said.hidden = false;
    }
  } catch (e) {}

  // Copy email
  $$("[data-copy]").forEach(btn => btn.addEventListener("click", async () => {
    const src = $(btn.dataset.copy);
    try { await navigator.clipboard.writeText(src.textContent.trim()); btn.textContent = "Copied"; }
    catch (e) { const r = document.createRange(); r.selectNodeContents(src); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = "Selected"; }
    setTimeout(() => (btn.textContent = "Copy email"), 1800);
  }));

  // Workflow: move the bottleneck
  const mb = $('[data-interactive="move-bottleneck"]');
  if (mb) {
    const BASE = { Decide: 9, Build: 3, Review: 5, Ship: 12 };
    const KIND = { Decide: "human", Build: "ai", Review: "human", Ship: "ai" };
    const ORDER = ["Decide", "Build", "Review", "Ship"], MAX = 20;
    $("[data-lanes]", mb).innerHTML = ORDER.map(k => `<div class="m-lane" data-lane="${k}"><span class="nm">${k}</span><span class="track"><span class="cap ${KIND[k]}"></span><span class="flow"></span></span><span class="q"></span></div>`).join("");
    const WHERE = { Build: "In development. Engineers are the constraint.", Review: "In review. Finished work waits for someone to approve it.", Decide: "Upstream, in deciding what to build. Judgment is now the constraint.", Ship: "In release." };
    const run = () => {
      const s = +$("#speed", mb).value, cl = $("#cluster", mb).checked;
      $('[data-out="speed"]', mb).textContent = s + "×";
      const cap = { Decide: BASE.Decide, Build: Math.min(MAX, BASE.Build * s), Review: BASE.Review * (cl ? 2.5 : 1), Ship: BASE.Ship };
      const neck = ORDER.reduce((a, b) => (cap[b] < cap[a] ? b : a));
      const thru = cap[neck];
      ORDER.forEach(k => {
        const ln = $(`[data-lane="${k}"]`, mb);
        $(".cap", ln).style.width = (Math.min(cap[k], MAX) / MAX) * 100 + "%";
        $(".flow", ln).style.left = (thru / MAX) * 100 + "%";
        ln.classList.toggle("neck", k === neck);
        $(".q", ln).textContent = k === neck ? "Bottleneck: work waits here" : cap[k] > thru ? "Idle capacity" : "";
      });
      $('[data-out="where"]', mb).textContent = WHERE[neck];
      $('[data-out="means"]', mb).textContent =
        neck === "Build" ? "This is the world most process was designed for. Speeding up building helps directly."
        : neck === "Review" && !cl ? "Making building faster again changes nothing. The queue only grows. Try reviewing related work together."
        : neck === "Review" ? "Grouping helped, but review is still the limit. More build speed won't show up in what ships."
        : neck === "Decide" ? "The bottleneck moved to the scarcest thing an org has: people deciding what's worth doing."
        : "Release is the limit.";
    };
    $("#speed", mb).addEventListener("input", run);
    $("#cluster", mb).addEventListener("change", run);
    run();
  }

  // Org design: count your hand-offs
  const ch = $('[data-interactive="count-handoffs"]');
  if (ch) {
    const GROUPS = ["Product", "Design", "Frontend team", "Backend team", "Data / ML team", "Platform team", "QA", "Release"];
    const DEFAULT = ["Product", "Design", "Frontend team", "Backend team", "Data / ML team", "QA"];
    $("[data-picks]", ch).innerHTML = GROUPS.map((g, i) => `<label for="g${i}"><input type="checkbox" id="g${i}" value="${g}" ${DEFAULT.includes(g) ? "checked" : ""}>${g}</label>`).join("");
    const run = () => {
      const sel = $$("[data-picks] input", ch).filter(i => i.checked).map(i => i.value);
      const n = Math.max(sel.length - 1, 0);
      $('[data-chain="a"]', ch).innerHTML = sel.length ? sel.map((g, i) => `<span class="bx">${g}</span>${i < sel.length - 1 ? '<span class="wait">wait →</span>' : ""}`).join("") : '<span class="m-small">Pick at least one group.</span>';
      $('[data-sum="a"]', ch).innerHTML = `<b>${n} hand-off${n === 1 ? "" : "s"}, ${n} queue${n === 1 ? "" : "s"}.</b> Each group has its own priorities, so the feature waits at every boundary.`;
      const sp = sel.filter(g => /team/.test(g) && !/Frontend|Backend/.test(g));
      $('[data-chain="b"]', ch).innerHTML = `<span class="bx pod">One pod</span><span class="bx ai">agent first pass</span>` + (sp.length ? '<span class="wait">review →</span>' + sp.map(g => `<span class="bx">${g}</span>`).join("") : "");
      $('[data-sum="b"]', ch).innerHTML = `<b>One team owns it end to end.</b> ${sp.length ? `Specialists from ${sp.length} group${sp.length === 1 ? "" : "s"} review only where there's a real dependency, instead of doing the work in their own queue.` : "No specialist queue left to wait in."}`;
    };
    $$("[data-picks] input", ch).forEach(i => i.addEventListener("change", run));
    run();
  }

  // Governance: own the draft
  const od = $('[data-interactive="own-the-draft"]');
  if (od) {
    const HC = [
      { sec: "Highlights", txt: "Bulk export for admins shipped ahead of plan.", src: "Jira · release notes", fix: "Bulk export for admins shipped on plan. “Ahead” came from a stale estimate." },
      { sec: "Highlights", txt: "Adoption of the new editor is growing month on month.", src: "Product analytics" },
      { sec: "Lowlights", txt: "Two enterprise accounts escalated slow report loads.", src: "Support tickets · calls" },
      { sec: "Lowlights", txt: "Onboarding completion is flat.", src: "Product analytics", fix: "Onboarding completion looks flat because tracking broke mid-month. The real trend is unknown." },
      { sec: "Metrics", txt: "Cycle time improved this month.", src: "Jira" },
      { sec: "Risks", txt: "A strategic account renews soon with an open escalation.", src: "CRM · escalations" }
    ];
    const st = HC.map(() => "draft");
    const run = () => {
      $("[data-hc-body]", od).innerHTML = ["Highlights", "Lowlights", "Metrics", "Risks"].map(sec => `<div class="m-hc-sec"><span class="m-eyebrow">${sec}</span>${
        HC.map((h, i) => ({ h, i })).filter(x => x.h.sec === sec).map(({ h, i }) => {
          const s = st[i];
          const txt = s === "fixed" ? `<s>${h.txt}</s><br>${h.fix}` : h.txt;
          const tag = s === "draft" ? `<span class="src">Agent · ${h.src}</span>` : `<span class="tag">${s === "owned" ? "Confirmed by team" : "Corrected by team"}</span>`;
          const acts = s === "draft"
            ? `<span class="acts"><button type="button" data-hc="${i}" data-a="owned">Confirm</button>${h.fix ? `<button type="button" data-hc="${i}" data-a="fixed">Correct</button>` : ""}</span>`
            : `<span class="acts"><button type="button" data-hc="${i}" data-a="draft">Undo</button></span>`;
          return `<div class="m-line ${s === "draft" ? "" : s}"><span class="txt">${txt}</span><span class="meta">${tag}${acts}</span></div>`;
        }).join("")}</div>`).join("");
      const owned = st.filter(s => s !== "draft").length, fixed = st.filter(s => s === "fixed").length;
      $('[data-out="count"]', od).textContent = `${owned} of ${HC.length} lines owned`;
      $('[data-out="bar"]', od).style.width = (owned / HC.length) * 100 + "%";
      $("[data-hc-foot]", od).innerHTML = owned === HC.length
        ? `<span class="m-eyebrow ready">Ready for review</span><p><b>Team summary:</b> Solid month on delivery. The report-load escalations are our top risk because one of those accounts renews soon, so we're pulling that fix forward. ${fixed ? (fixed === 1 ? "One correction" : "Our corrections") + " went back into next month's draft." : "No corrections this month."}</p>`
        : `<span class="m-eyebrow">Team summary</span><p class="locked">The team writes the summary once every line is confirmed or corrected. Nothing reaches leadership that nobody owns.</p>`;
      $$("[data-hc]", od).forEach(b => b.addEventListener("click", () => { st[+b.dataset.hc] = b.dataset.a; run(); }));
    };
    run();
  }

  // Context layer: same thing, different names
  const sn = $('[data-interactive="same-thing"]');
  if (sn) {
    const out = $('[data-out="names"]', sn);
    const run = () => {
      const v = ["n1", "n2", "n3"].map(id => $("#" + id, sn).value.trim()).filter(Boolean);
      out.textContent = v.length > 1 ? `${v.length} unrelated things: ${v.map(x => `“${x}”`).join(", ")}` : "three unrelated things";
    };
    ["n1", "n2", "n3"].forEach(id => $("#" + id, sn).addEventListener("input", run));
  }
})();
