// The four layers of the operating model, numbered from the foundation up:
// 1 Context layer · 2 Workflow · 3 Org design · 4 Governance. Exported in number order.
// One vocabulary everywhere: 1 Context layer · 2 Workflow · 3 Org design · 4 Governance.
// Rule: at most one number per layer, in `field`.
// To add a video, set `video.youtube` to the YouTube video ID.

const layers = [
  {
    key: "governance",
    insight: ["The first AI-drafted review failed on ownership, not data", "Leadership asked a team about a lowlight, and the team said the AI had written it. The draft wasn't the problem. Nobody stood behind it."],
    result: ["Agent-drafted monthly health check, owned by each team", "Monthly reviews replace the quarterly deck, with far less prep"],
    fieldAfter: "hard",
    case: {
      "start": "Quarterly review decks took weeks to assemble and were stale by the time they were presented. Teams spent their prep time writing status instead of deciding what to do about it.",
      "decisions": "Let an agent draft the review from the systems teams already use, and keep the team as the owner: they correct the draft and write the summary. Plan for corrections from day one and feed them into the next cycle. Move from quarterly to monthly.",
      "redesign": "A monthly health check with highlights, lowlights, metrics and risks drafted from support tickets, customer calls, Slack, retention data, OKRs, analytics, escalations and the roadmap. Piloted on three product streams, then rolled out to every pod.",
      "hard": "The first review showed that a correct draft isn't enough. A team that hasn't checked and committed to what it presents can't answer questions about it.",
      "changed": "Every pod now runs the monthly check. Teams spend their time correcting and committing instead of authoring, and the format improves each month.",
      "learned": "Nobody should present what they don't own. Ownership has to be a step in the process, not an assumption about it."
    },
    n: 4,
    shift: ["Teams write status reports for reviews", "Agents draft the status; teams correct and own it"],
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
    insight: ["Every pod going live didn't mean it worked", "Activation tells you the move happened. Whether pods re-prioritise less, ship faster and wait less on specialists is a separate question, and it takes months to answer."],
    result: ["14 domain teams rebuilt as 30 outcome pods", "All pods live; now measuring speed and focus"],
    fieldAfter: "redesign",
    case: {
      "start": "Teams were organised by function and legacy product line, while the roadmap had moved to AI. Every AI feature crossed product lines, so one initiative needed several hand-offs before a customer saw anything, and tech debt, bugs and customer asks interrupted everyone.",
      "decisions": "Organise around outcomes, not functions. Give interrupts their own pods (tech debt, production support, customer impact) so outcome pods keep their focus. Have an agent do the first cross-domain pass, with specialists reviewing only for dependencies, and make one system of record non-negotiable.",
      "redesign": "The team structure itself: pod charters, decision rights, a readiness gate for every pod, a rehearsal workshop for pod leads, a leadership dashboard and a weekly enablement clinic. I ran the transition with no direct reports over the people moving.",
      "hard": "Engineering adopted the shared system of record faster than Product, and closing that gap became the main work after launch. A pod's plan that lives in threads and decks doesn't exist for anyone else.",
      "changed": "All pods are live and run a monthly health check. Whether they re-prioritise less, ship faster and wait less on specialists is what we're measuring now.",
      "learned": "Activation is not success. A pod model works or fails on three things, in this order: a shared system of record, pod leads who have rehearsed before go-live, and a readiness gate leadership can see."
    },
    n: 3,
    shift: ["Functions own their piece of the work", "Small teams own the outcome end to end"],
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
      text: "domain teams rebuilt as outcome pods across the R&D organisation."
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
    insight: ["Faster building made the queue longer", "Once agents drafted the work, almost everything in flight was waiting in review, not in development. The bottleneck moved to people deciding it's right."],
    result: ["AI-assisted customer-fix pipeline with human review gates", "Fixes that never got prioritised now ship routinely"],
    fieldAfter: "hard",
    case: {
      "start": "Small customer fixes kept waiting. Each one cost less than the release process around it, so none ever won a slot against roadmap work, and account teams carried the frustration.",
      "decisions": "Let agents do the grooming and the first draft of the code. Keep people at the three gates where judgment matters: functional review, technical review and merge. Set decision tiers so the lowest-risk changes need one mandatory human check, and order the work by account health, renewal timing and strategic weight.",
      "redesign": "The path from request to release: one front door, an in-house grooming agent, agent-raised pull requests, testing and deployment kept in-house, and a release note to customer-facing teams when a fix ships. Sending work back at a gate is part of the design, not a failure.",
      "hard": "Once building got cheap, review became the queue. And when we automated telling customers a fix had shipped, the ship-status data underneath was wrong in most of the first runs.",
      "changed": "Fixes that used to wait indefinitely now ship routinely, through a dedicated customer-impact pod. Reviewing related fixes together, grouped by root cause, cut human review passes sharply without adding reviewers. Next year the pipeline becomes the customer-impact arm of a company-wide retention programme.",
      "learned": "Put human gates where the judgment is, not everywhere. And once fixes stop being scarce, deciding what to fix first becomes the real business decision."
    },
    n: 2,
    shift: ["Building is the constraint", "Review is the constraint"],
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
      text: "active stories in our AI-assisted customer-fix pipeline were waiting in review, not in development."
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
    insight: ["Connecting the tools was the easy part", "Ten sources plugged in quickly. The hard part was that every function names the same product area differently, so an agent reading all of them sees unrelated things."],
    result: ["Ten sources behind one shared, scoped layer", "Workflow, pods and reviews all read from the same place; adoption growing"],
    fieldAfter: "redesign",
    case: {
      "start": "Every function had its own tools and its own name for the same product area. The reasoning behind decisions lived in meetings and in people's heads, so every new AI tool started from nothing.",
      "decisions": "Build one shared layer instead of wiring each tool to each agent. Run it on a single scoped service account, with private channels, HR and finance spaces excluded. Capture meeting decisions automatically into each pod's space, so the why is recorded where the work happens.",
      "redesign": "It started as my hackathon project and grew into the layer everything else reads: tickets, calls, Slack, roadmap, OKRs, Jira, analytics, code, help docs and the CRM, behind one account that infosec reviews.",
      "hard": "Getting the agent to read reliably across tools, because each function names the same area differently. Records were easy; the conversations where decisions get made were not. Capture only works when teams follow the structure, and teaching that took longer than building it.",
      "changed": "The customer-fix pipeline, the pods and the monthly health check now read from the same place. Adoption is growing, and not every team is onboarded yet.",
      "learned": "Product reasoning isn't in any tool. A feature built in a week was rolled back at the demo, because the concept it rested on had only ever been an admin's organising tool. Capturing the why has to be a step inside the work."
    },
    n: 1,
    shift: ["Context sits in disconnected tools and people's heads", "Context is connected and captured for people and agents"],
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
      num: "10",
      text: "sources behind one scoped service account. Private channels, HR and finance spaces stay excluded."
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

module.exports = layers.sort((a, b) => a.n - b.n);
