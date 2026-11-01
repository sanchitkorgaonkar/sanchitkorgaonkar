---
layout: note.njk
title: "How much of your R&D can actually be AI-driven?"
year: 2026
type: "Analysis"
excerpt: "A working model for splitting R&D capacity between AI and human — sliced by work type and size."
---

Last week, Satya Nadella's essay ["A frontier without an ecosystem is not stable"](https://x.com/satyanadella/article/2066182223213293753) was everywhere on my Twitter and LinkedIn.

The core idea is simple to state: the firm of the AI era runs on two kinds of capital. **Human capital** — the knowledge, judgment, relationships, ingenuity, and pattern recognition of its people. And **token capital** — the AI capability the firm builds and owns. His bet is that human capital gets *more* valuable as token capital grows, not less.

My favorite line from the essay: "without human direction, you have compute running in circles."

The question it left me with: if human and token capital are supposed to compound together, what does that look like in an actual product development cycle?

**How much of my R&D capacity can actually be AI-driven, and how much has to stay human?**

Not as a debate — as a working model.

The first thing I realized: you can't answer this for "product development" as one blob. You have to slice the work first. Two cuts — by type, then by size.

## The type of work

I see three buckets normally in product development, and they behave differently enough that they deserve separate treatment:

1. **Big Rocks** — strategic bets, major feature requests. High ambiguity, high stakes, most of the effort is in framing the problem.
2. **Papercuts** — improvements and enhancements. The problem is understood, the scope is bounded.
3. **KTLO** — bugs and the operational work that keeps the software reliable and stable.

A papercut has a known-good target state. A Big Rock doesn't even have a settled problem statement yet. KTLO is light on fix but diagnosis-heavy.

This is why blanket claims like "AI will do 40% of engineering" never land — 40% of *which* work?

## The size of the work

Within each bucket, I'm using plain T-shirt sizing — XS to XL. And here's the interesting part: size turns out to be a decent proxy for how much autonomy you can safely hand to AI. That gives a ladder:

- **XS → AI-driven.** Autonomous-safe. The entire workflow — problem framing, prioritization, grooming, development, testing, deployment — can be owned by AI. No human in the loop.
- **S → AI-led, human review.** AI runs it end to end; a human gates the output before it ships.
- **M → AI-led, human assist.** AI still drives, but a human is working alongside it through the workflow, not just checking at the end.
- **L onwards → Human-led, AI-assist.** A human owns the direction and the key calls; AI speeds up the execution.

Read the ladder top to bottom and Nadella's abstraction becomes concrete: token capital owns the bottom, human capital owns the top.

## Why this matters

Two threads I want to pull on in follow-up notes.

First, the two cuts interact: Big Rocks are almost never XS, and papercuts are disproportionately XS and S. Which means papercut is where token capital compounds fastest — and every papercut task an agent absorbs quietly frees human capital for the top of the ladder.

Second, this changes what capacity planning even means. The question stops being "how many engineers do we need?" and becomes "what's our AI-driven share in each bucket, and how do we move it up?" That number — the AI-driven share of R&D — might be the most honest internal measure of a firm's token capital.
