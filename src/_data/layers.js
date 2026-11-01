// The four layers of the operating model, top of the stack first.
// One vocabulary everywhere: Workflow · Org design · Governance · Context layer.
// Rule: at most one number per layer, in `field`.
// To add a video, set `video.youtube` to the YouTube video ID.

module.exports = [
  {
    key: "governance",
    slug: "governance",
    name: "Governance",
    sub: "How leaders see",
    glyph: "human",
    status: { tone: "ok", label: "Running · every pod, monthly" },
    problem: "I don't trust what status reports tell me.",
    title: "Status shouldn't be written. It should be corrected and owned.",
    lede: "The quarterly review deck takes weeks to assemble and is stale when it's presented. An agent can draft most of it from tickets, calls, Slack, retention data and the roadmap. The team's job shifts from writing status to correcting it and standing behind it.",
    description: "How an agent-drafted, team-owned monthly health check replaces the quarterly review deck.",
    interactive: "own-the-draft",
    field: {
      num: null,
      text: "In the first review, leadership asked a team about a lowlight. The team couldn't explain it and said the AI had written it. The review was sent back a week. Since then, owners write the summary themselves, and every correction feeds the next month's draft."
    },
    learned: [
      ["Plan for corrections from day one", "The first drafts will be wrong in places. If corrections aren't captured and fed back, the team fixes the same errors every month and stops trusting the draft."],
      ["Nobody presents what they don't own", "A draft the team hasn't confirmed shouldn't reach leadership. Ownership has to be a step in the process, not an assumption about it."]
    ],
    questions: [
      "How long does the quarterly review take to prepare, and who acts on it?",
      "When a lowlight appears, can the team explain what's behind it?",
      "Are corrections to automated summaries fed back, or lost each cycle?",
      "Does your review end in decisions, or in a list of updates?"
    ],
    video: { title: "Governance in 90 seconds", length: "1:30", youtube: null }
  },
  {
    key: "org",
    slug: "org-design",
    name: "Org design",
    sub: "How teams are shaped",
    glyph: "human",
    status: { tone: "ok", label: "Running · measuring" },
    problem: "Work keeps waiting between teams.",
    title: "AI in a function gives faster artifacts. AI in a team gives faster outcomes.",
    lede: "Give every function its own AI tools and each produces more, faster, in its own system. The work still crosses the same hand-offs. The bigger gain is small teams that own an outcome end to end, with an agent doing the first pass across domains.",
    description: "Why outcome pods with an agent's first pass beat AI tools bolted onto each function.",
    interactive: "count-handoffs",
    field: {
      num: "14 → 30",
      text: "domain teams rebuilt as outcome pods across an R&D organisation. I designed the model and ran the transition with no direct reports over the people moving."
    },
    learned: [
      ["The system of record decides whether pods work", "A pod's plan that lives in threads and decks doesn't exist for anyone else. Engineering adopted the shared system faster than Product, and closing that gap became the main work after launch."],
      ["Activation is not success", "Every pod being live tells you the move happened. It doesn't tell you whether pods re-prioritise less, ship faster, or wait less on specialists. Those take months to read."]
    ],
    questions: [
      "How many hand-offs does one AI feature take before a customer sees it?",
      "Who owns tech debt, production bugs and customer asks, or do they interrupt everyone?",
      "Do your specialists review work, or do they do it?",
      "Is each team's plan in the system of record, or in threads and decks?"
    ],
    video: { title: "Org design in 90 seconds", length: "1:30", youtube: null }
  },
  {
    key: "workflow",
    slug: "workflow",
    name: "Workflow",
    sub: "How work flows",
    glyph: "ai",
    status: { tone: "ok", label: "Running · scaling" },
    problem: "My teams are faster, but we don't ship more.",
    title: "When building gets cheap, review becomes the queue.",
    lede: "The work that never got prioritised was small, useful, and cheaper than the process around it. Let agents do the heavy lifting and it finally moves. Then it piles up at the one step agents can't take for you: a person deciding it's right.",
    description: "What happens to the bottleneck when AI makes building cheap, and how to redesign the human gates.",
    interactive: "move-bottleneck",
    field: {
      num: "24 of 26",
      text: "active stories in our AI-assisted customer-fix pipeline were waiting in review, not in development. Reviewing related fixes together, grouped by root cause, cut human review passes sharply without adding reviewers."
    },
    learned: [
      ["Put the human gates where the judgment is", "Not every change needs the same scrutiny. The lowest-risk changes get one mandatory human check; riskier ones get more. Sending work back at a gate is expected, not a failure."],
      ["Decide what gets fixed by who it's for", "Once fixes stop being scarce, order matters. We rank by account health, renewal timing and strategic weight, then group fixes by theme so related ones ship together."],
      ["The status field will lie to you", "When we automated telling customers a fix had shipped, the ship-status underneath was wrong in most of the first runs."]
    ],
    questions: [
      "How many small customer requests are older than a quarter, and why did none of them ship?",
      "Where does finished work wait: in development, or in review?",
      "How many human checks does your lowest-risk change pass through?",
      "Does your ship-status field match what customers actually received?"
    ],
    video: { title: "Workflow in 90 seconds", length: "1:30", youtube: null }
  },
  {
    key: "context",
    slug: "context-layer",
    name: "Context layer",
    sub: "The foundation",
    glyph: "sys",
    status: { tone: "warn", label: "Built · adoption growing" },
    problem: "We have AI tools everywhere, and nothing connects them.",
    title: "The hard part isn't connecting tools. It's that every function names things differently.",
    lede: "Most AI budgets go to tools that make one function faster. Almost nothing goes to the layer that assembles what they produce. Workflow, org design and governance all read from the same place.",
    description: "The shared context layer underneath workflow, org design and governance, and why naming is the hard part.",
    interactive: "same-thing",
    field: {
      num: "11",
      text: "sources behind one scoped service account: tickets, calls, Slack, roadmap, OKRs, Jira, analytics, code, tests, help docs and the CRM. Private channels, HR and finance spaces stay excluded."
    },
    learned: [
      ["The reasoning isn't in any tool", "A feature built in a week through an AI-assisted workflow was caught at the demo by a PM who knew the product's history. The concept it was built on had only ever been an admin's organising tool. We rolled it back. Capturing the why has to be a step inside the work."],
      ["Records are easy. Decisions are hard.", "History and records are tractable. The conversations where decisions get made are the hard part, and they're only captured if teams follow the structure."]
    ],
    questions: [
      "Do your functions use the same name for the same product area?",
      "Where are decision conversations recorded, if anywhere?",
      "Once an agent can read more than any one person, who can see what?",
      "Which product decisions live only in one person's head?"
    ],
    video: { title: "The context layer in 90 seconds", length: "1:30", youtube: null }
  }
];
