// Library: podcasts, essays and newsletters, each tied to one layer, with Sanchit's take.
// Keep "says" to one sentence and "take" to two or three. Link to the original; no long quotes.
// type: "Article" | "Podcast" | "Newsletter" | "Paper" | "Talk"
// stance: "matches" (Matches what I saw) | "adds" (Adds to it) | "pushback" (I'd push back)
module.exports = [
  {
    title: "How to build a compounding OS",
    author: "Sachin Rekhi",
    source: "",
    type: "Article",
    url: "https://www.sachinrekhi.com/p/how-to-build-a-compounding-os",
    published: "2026-08-23",
    added: "2026-11-06",
    layer: "context",
    stance: "adds",
    says: "The gap between elite and average AI teams comes from shared infrastructure, not better tools: one agentic platform, a shared library of skills, and company context agents can read.",
    take: "This matches what we built. Our monthly health check started as separate skills for each section and only became useful once we combined them into one agent every team runs and corrects; that's the compounding he describes. Two places I'd go further. Making context machine-legible is harder than connecting it, because every function names the same product area differently and the reasoning behind decisions isn't in any tool. And merged pull requests measure faster artifacts, not faster outcomes: when we sped up building, the queue moved to review."
  }
];
