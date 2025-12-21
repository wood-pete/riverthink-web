---
title: "When agents carry their own context"
date: "2025-02-12"
hero: "/blog/context-beams.svg"
---

Context-carrying agents behave more like teammates than macros. They remember why a decision matters, not just what the next API call should be.

![Context beams](/blog/context-beams.svg)

### Build the backpack

- **Thin profile:** keep only the last actionable facts, not the entire chat log.
- **Anchored references:** instead of dumping docs, store IDs or file paths and fetch on demand.
- **Just enough state:** push state to external stores when it grows; keep the agent lean for clarity and cost.

### Playbooks on rails

We give every agent a short playbook: what a good outcome looks like, the two anti-patterns to avoid, and the boundary lines. The playbook becomes a miniature contract between the agent and the operator.

### Results we watch

- Lower variance across retries because the intent stays stable.
- Faster handoffs to humans—people see not just the output but the reasoning breadcrumbs.
- Easier audits when we can replay the state that shaped a decision.
