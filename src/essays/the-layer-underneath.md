---
layout: essay.njk
title: "The Layer Underneath"
date: 2026-06-12
excerpt: "AI made teams faster at building. It did not make organizations faster at shipping. The bottleneck moved — and most orgs are investing in the wrong layer."
readtime: 12
---

<!-- Paste sanitized essay content here -->

A few weeks ago I was looking at the release count for a quarter - features shipped, milestones hit, the standard execution view leadership wants to see going into a planning cycle. I pulled the numbers expecting the chart to bend upward. It didn't. The quarter was the same against the one before it. 

This was strange, because nothing about the last quarter felt the same.

In the previous twelve months the org had gone through something close to a full AI tooling adoption cycle. Engineers were on Cursor and Claude Code. Designers were prototyping using Lovable and Bolt. PMs were drafting PRDs with assistants. QA was generating test cases through agents. Even our meetings were being transcribed, summarized, and routed automatically — people had bought Wispr Flow subscriptions so they wouldn't have to type long prompts. Every function in the product development lifecycle was visibly, measurably faster at its own work. You could see it in the meetings, feel the energy on the floor. People were shipping more PRs, more mockups, more drafts, more docs.

And yet, the release count was flat.

So I started looking outside.

First the public conversation. Online, in podcasts, on LinkedIn, in the threads I follow, the story was unambiguous: AI was a force multiplier, productivity was skyrocketing, individual engineers were doing the work of teams. Demos of someone building a working app over a weekend. Screenshots of a PR closed in fourteen minutes. Founders posting that their twenty-person company was operating like a hundred-person one. The public narrative was one direction, and it was loud.

Then I started talking to peers. Friends at Hyperscalers, friends at scale-ups, friends at older enterprises still working through their first wave of AI rollout. I asked the same question I had been sitting with — Are you actually shipping more? — and the answer came back surprisingly consistent. Individuals were faster. Teams were not. Release cadences hadn't materially moved. In some cases people privately admitted things had gotten worse — more rework, more trash, more meetings about why the AI-generated work wasn't quite landing.

The gap between what the public conversation was claiming and what operators were quietly reporting was wider than I expected. And it held across very different kinds of companies. The same pattern, in different forms.

There's an idea from basic physics that I keep returning to when I think about why some teams ship better and some don't.

Throughput isn't just how much force you apply. It's force in a direction. Five people pushing a heavy box in roughly the same direction will move it. Five people pushing the same box from five different angles will exhaust themselves moving it almost nowhere. The total effort spent is identical. The total work done is not. Magnitude is what each person contributes. Direction is whether those contributions compound or cancel.

The math here is unforgiving. If a team of five is roughly aligned — say, within thirty degrees of a shared goal — the resultant is close to the sum of their efforts. Doubling each person's individual output nearly doubles the team's output. The system rewards investment in magnitude. But if that same team is pulling ninety degrees apart, doubling each person's output barely moves the resultant at all. You can pour twice the effort in and get back almost nothing.

Vector theory from physics is in action in the product development lifecycle.

For most of the pre-AI era, the magnitude term was the binding constraint. Writing the code took weeks. Building the prototype took weeks. Producing the design took weeks. Direction was loose, but it didn't matter much, because the cost of misalignment was absorbed into long cycles that gave teams time to catch and correct it.

Sprint length, release cadence, planning rituals, design review cycles, even the way roadmaps were sequenced — all of it assumed that writing the code, producing the design, and shipping the artifact were the slow steps in the system. Most direction work — deciding what to build, getting teams aligned, resolving dependencies, agreeing on what "done" meant — was treated as something you did while the slow execution work was happening. 

The slowness gave us room.

It absorbed a constant background level of misalignment, missed context, half-finished decisions, and unresolved dependencies. While the build took six weeks, a team had time to re-decide, clarify, catch a wrong assumption, hear back from a customer, raise a flag in a Monday review. The cycle was forgiving. Direction work got done quietly, in the gaps that magnitude work created.

What looks like an AI productivity gap now is, more accurately, the accumulated direction debt of a product development lifecycle that was never designed to run this fast.

A few weeks later, I spent most of a week in meetings on a single initiative. By the end, I'd sat through five of them with different combinations of stakeholders.

The initiative had moved fast at the start. The prototype was built, the PRD looked sharp, the early engineering work was visibly running ahead of schedule. But we couldn't get it to release. Each meeting surfaced context that one part of the team was operating on and another part wasn't. In the first, the designer walked through a user experience that diverged fundamentally from how the current product worked — a direction the design team had been developing, but that the wider initiative group was encountering for the first time. In the second, the customer-facing team brought feedback the engineers hadn't seen. In the third, the user research lead walked through what was emerging from live validation sessions with real users — work that was actively in flight, generating a signal that the engineering team building against its own assumptions hadn't seen. In the fourth, two engineers walked through a technical decision the PM hadn't been part of. In the fifth, leadership asked about the release plan — the answer existed, but it had moved twice that week and the version in the room was three days old. By the end of the week, we were re-debating decisions that had been made, but had never been distributed.

To understand why this keeps happening, it helps to look at what direction work actually is. Most of it is context synthesis. Deciding what to build requires holding the customer interview, the analytics signal, the engineering constraint, the dependency map, and the executive priority together long enough to form a judgment. Aligning a team requires making sure each member is operating on the same version of that context. Resolving a dependency requires knowing what three other teams have already committed to. None of this work produces an artifact. All of it produces shared understanding, which is the input every magnitude tool depends on but no magnitude tool creates.

The problem is that context, in a modern software org, is structurally distributed. The product manager writes the PRD in Confluence. The designer's reasoning lives in Figma comments. The engineering decisions are made in Slack threads and in two people stepping into a meeting room. Customer feedback is in Zoom recordings. The launch plan is in a Google Doc owned by marketing. Tickets are in Jira. Half the actual decisions are in DMs. Each tool is excellent at its job. None of them are designed to assemble.

And the context that matters most is often not in any tool at all. It is in what a VP said in a one-on-one, the concern a customer hinted at but never documented, the unstated reason a team is guarding its roadmap. The decisions that most shape a release are frequently the ones no one wrote down.

That week was when the gap stopped being abstract for me. The point of this essay is not the answer — it's the gap. Most orgs do not yet have one.

When output is flat, the instinct is to buy more tools. More automation, another AI assistant that one of the functions has been asking for. The problem is that almost every tool currently on the market is a magnitude tool. It accelerates one function's local output. Coding assistants accelerate engineering. Design assistants accelerate design. Research assistants accelerate analysis. PRD assistants accelerate products. Each tool, in isolation, is doing exactly what it advertises. Each one is also producing more artifacts, faster, in a different system of record, owned by a different function.

The implication is uncomfortable. Every additional magnitude tool added without a direction layer underneath makes the assembly problem worse, not better. The local outputs accelerate. The context behind those outputs fragments further. The slow cycle that used to absorb the misalignment is now even shorter. The bill for direction debt comes due faster, and the bill is larger.

This is the mechanism behind the flat release count. It is not that the AI tools are failing. It is that they are succeeding at exactly the thing they were designed to do, in a system that was never designed to assemble what they produce.

What's underbuilt, in almost every org I've looked at, is the layer underneath. Pulling context across tools. Connecting that context end to end. Surfacing risks and dependencies based on the full picture rather than a local view. Making the trade-offs visible so the right decisions can be made. Distributing those decisions once they are.

None of this is glamorous or visible. None of it shows up in a product demo. It is, however, the infrastructure that determines whether all the magnitude tools sitting on top of it actually compound or cancel. It is the term in the throughput equation that AI has not yet moved. The layer underneath still needs to be built.

Every org has spent the last few years investing in the magnitude tier, getting better and better at it. Every function in every org will have agents and assistants that close most of the local productivity gap. The differentiation that magnitude tooling once provided will collapse.

What will separate orgs at that point is whether anyone has built the tier underneath. The infrastructure that consolidates context across tools, surfaces risks before they become release blockers, makes trade-offs legible to the people who need to weigh them, and distributes decisions once they are made. The next phase of competitive advantage in the product development lifecycle will be decided at the tier underneath the magnitude tools, not on top of them.

 I've started building one version of this — a thin layer that sits on top of the tools an org already has, designed to assemble context rather than generate more of it. 

The question worth taking into your next staff meeting is not whether the org is using enough AI. By the end of next year, that question will be settled for everyone.

The question is what fraction of the last four quarters of AI investment went to accelerating magnitude work, and what fraction went to building the layer that assembles it. If that ratio is ten to one or worse, the flat release count is the receipt. It will keep arriving every quarter until something changes underneath.



