---
title: Before You Trust AI in Hospitals, Run This One Type of Trial
date: "2026-04-08"
hero: "/blog/hero-default-team.png"
tags: ["Hospital AI", "Randomised Trials", "Clinical Operations"]
---

# How Hospitals Can Run Randomised Trials for AI Agents

Hospitals are moving from AI as a clever demo toward AI as an operational teammate. That shift deserves stronger evidence. A randomised controlled trial can help a hospital test whether an agent genuinely improves flow, documentation, education, or discharge quality in the messy reality of day to day care, rather than only looking impressive in a pilot deck.[^1][^2]

For operational agents, the most useful design is often a **pragmatic cluster randomised trial**, and in many hospitals the most practical version is a **stepped wedge** rollout. In that design, groups such as wards, teams, or clinics are randomised to the order in which they receive the new agent. Everyone starts in usual care, then clusters cross over to the agent in a random order over time. It is rigorous, fair, and well suited to hospitals where a gradual rollout is already the sensible path.[^3][^4]

<div class="quote">
“An AI agent in a hospital should earn trust the same way any new service does, by improving outcomes in the real world, with the humans still firmly in charge.”
</div>



## Types of trials you can use

Before designing the trial, it helps to understand the main types of randomised trials used in hospitals. Each one answers a slightly different question depending on how the AI agent fits into the workflow.

<details><summary>Individual randomised controlled trial</summary><div class="accordion-content">

This is the simplest form of a trial. Each patient is randomly assigned to either receive the AI supported care or the usual care.

You can think of it like flipping a coin for each patient. Some get the agent, some do not, and then you compare outcomes between the two groups.

This works best when the intervention is isolated to one patient and does not change how the wider team behaves.

- Example: A patient education agent explaining a procedure
- Easy to analyse and very clean statistically
- Risk of “spillover” if staff change behaviour for all patients

</div></details>

<details><summary>Cluster randomised trial</summary><div class="accordion-content">

Instead of randomising individual patients, you randomise groups. These groups are called clusters and could be wards, teams, or clinics.

This is useful when the AI agent changes how a team works. If one nurse uses a discharge agent, it will likely influence how the whole ward operates.

So rather than mixing patients within the same ward, you assign entire wards to either use the agent or continue as usual.

- Example: One ward uses a discharge agent, another does not
- Reduces contamination between groups
- Slightly more complex to analyse because patients in the same cluster behave similarly

</div></details>

<details><summary>Stepped wedge trial</summary><div class="accordion-content">

This is a special type of cluster trial where everyone eventually gets the AI agent, just at different times.

Imagine a rollout plan. At the start, no wards use the agent. Then, one ward starts using it. Later, another ward joins. Over time, all wards adopt it, but in a random order.

This allows you to compare:

- Wards before and after they receive the agent
- Wards that have the agent versus those that do not yet have it at the same time

It works well in hospitals because:

- It feels fair since everyone gets access
- It matches how systems are usually rolled out
- It captures real world operational conditions

- Example: Bed allocation agent introduced ward by ward over several months

</div></details>

<details><summary>Pragmatic trial</summary><div class="accordion-content">

A pragmatic trial focuses on testing the AI agent in real world conditions, rather than under perfect or controlled settings.

Instead of tightly controlling everything, you allow normal variation in staff, workload, and behaviour. This gives results that reflect how the agent will actually perform in practice.

- Example: A documentation agent used during normal clinics with real patients and time pressures
- High relevance for decision makers
- Slightly more noise in the data, but more realistic insights

</div></details>


## Why randomise at all

The case for randomisation is simple. Hospital operations change every week. Winter pressure arrives, staffing shifts, new consultants join, wards fill, and teams naturally get better at using any new tool over time. If a hospital simply compares before and after, it can end up crediting the agent for changes that were already on the way.

A randomised design creates a cleaner comparison. It helps separate the effect of the agent from the effect of timing, local enthusiasm, and workflow variation. For AI, that matters even more because guidance such as SPIRIT AI and CONSORT AI asks teams to be explicit about the model, the workflow, the human oversight, the input data, and how errors are handled.[^1][^2] Recent reviews also show that reporting quality in AI trials still has room to grow, which makes careful trial design even more valuable.[^5]

A good RCT also gives executives and clinical leaders answers they can act on:

- Did the agent improve the primary operational or clinical outcome?
- Did it save staff time without shifting work somewhere else?
- Did it behave safely across different wards and patient groups?
- Did the benefit hold once the novelty wore off?

## The best trial shape for hospital agents

For a **bed allocation agent** or **discharge agent**, randomising individual patients is usually awkward because the intervention changes team behaviour and shared operational decisions. A ward, service line, or bed management team is often the better unit of randomisation. That reduces contamination and mirrors the way the work is actually done.[^3]

For a **clinical documentation agent**, there are two credible options. One is to randomise clinicians. The other is to randomise clinic sessions or care teams. A recent pragmatic randomised trial of ambient AI scribes assigned 238 physicians across 14 specialties to one of two scribe tools or usual care and measured time in note and burnout related outcomes, which is exactly the sort of practical evaluation hospitals need more of.[^6]

For a **patient education agent**, individual patient randomisation can work very well because the interaction is easier to isolate. There is already randomised work in this area, and broader reviews suggest strong potential, while also highlighting the importance of trust, privacy, and good behavioural design.[^7][^8]

<details><summary>Choosing the unit of randomisation</summary><div class="accordion-content">

A useful rule is to randomise at the level where the workflow actually changes.

- **Patient level** when the agent interacts directly with one patient and does not alter the wider team process
- **Clinician level** when the agent supports one doctor, nurse, or allied professional
- **Team or ward level** when the agent changes shared operations, prioritisation, or handoffs
- **Site level** when the intervention depends on local governance, infrastructure, or major process redesign

</div></details>

## How to run the trial

Start by defining the agent in operational terms. That means its exact task, where it appears in the workflow, what data it sees, what it recommends or drafts, who approves the action, and what happens when the output is incomplete. In hospitals, clarity is a safety feature disguised as project management.

Then choose one primary outcome only. You may admire twelve dashboards, but the statisticians will sleep better with one main question.

### 1. Bed allocation agent

A bed allocation agent might suggest the best next bed for an admitted patient based on specialty fit, infection control, acuity, cleaning status, and predicted discharges. The primary outcome could be **time from admission decision to bed assignment**. Secondary outcomes could include boarding time, number of bed moves, outlier placements, and staff override rate.

A sensible design would be a stepped wedge trial across wards or bed management shifts.

- Randomise wards to the order of activation
- Keep human bed managers as final decision makers
- Log every recommendation, override, and reason
- Review equity by age, frailty, specialty, and protected characteristics where available

### 2. Discharge agent

A discharge agent might assemble discharge tasks, identify blockers, draft summaries, and nudge teams when tests, pharmacy, transport, or community referrals are the remaining delay. The primary outcome could be **time from medically fit decision to actual discharge**. Secondary outcomes could include discharge before noon, seven day readmission, pharmacy turnaround, and patient experience.

This often suits cluster randomisation by ward or consultant team.

- Use the same discharge criteria in both arms
- Measure whether work is genuinely completed earlier, not merely documented earlier
- Track readmissions and post discharge contacts as balancing measures
- Include manual safety review for complex cases

### 3. Clinical documentation agent

A documentation agent may listen, transcribe, and draft notes or letters for clinician review. Here the primary outcome is often **time in note** or **same day note closure**. Secondary outcomes might include clinician workload, patient satisfaction, note quality, coding completeness, and error rate.

The recent ambient scribe trial offers a strong template: pragmatic deployment, routine workflow measurement, and survey based staff outcomes alongside safety monitoring.[^6]

- Randomise clinicians or clinic sessions
- Use structured note quality review on a sample
- Record edits, rejections, and clinically meaningful inaccuracies
- Keep approval and sign off with the responsible clinician

### 4. Patient education agent

A patient education agent may explain a procedure, medicine, prep instructions, or discharge plan in plain language and multiple languages. The primary outcome could be **knowledge gain** or **adherence to the intended next step**. Secondary outcomes could include anxiety, call backs, digital engagement, and satisfaction.

This can often be tested at patient level.

- Randomise eligible patients to usual education or usual education plus the agent
- Measure comprehension after the visit and again later
- Design for readability, culture, and accessibility
- Escalate uncertain or clinical questions to a human

<div class="pullquote pullquote-right">
The elegant part of a hospital RCT is that it respects reality. The glamorous part is mostly the spreadsheet.
</div>

## What must be stored and what should fade away

AI agents work better with memory, yet a trial should still be disciplined about what the system keeps. Hospitals should decide in advance what information is useful, what becomes stale, and what should expire. A bed allocation agent may benefit from recent occupancy, cleaning state, or specialty constraints, while a patient education agent may need the current leaflet version, preferred language, and the specific procedure pathway for that episode of care.

The trial protocol should set clear retention and review rules.

- Store only the minimum data needed for the agent task and the trial analysis
- Expire transient operational signals when they are no longer relevant
- Version prompts, policies, and knowledge sources so results stay interpretable
- Separate operational memory from patient record truth and from research logs

This matters for privacy, governance, and scientific clarity. It also saves teams from the deeply modern problem of an agent confidently acting on information that was perfectly sensible last Thursday.

## Safety and fairness during the trial

Every hospital AI trial should include balancing measures and active monitoring. A discharge agent that speeds discharge while increasing readmissions has taught you something useful, just perhaps not what the brochure promised. A documentation agent that saves six minutes but introduces occasional inaccuracies needs a careful view of net value. In one recent study of AI generated patient centred discharge instructions, potentially harmful safety issues were identified in 18 percent of outputs, including hallucinations and new medications, which is a strong reminder that polished language and safe content are very different things.[^9]

Plan governance from day one.

- Predefine stop rules for safety signals
- Audit overrides because they reveal where the model and workflow misalign
- Review subgroup performance, especially for language and complexity
- Freeze important model versions during the main trial period where feasible

## What success looks like

A successful trial does more than show a p value. It gives the hospital a deployment decision. It tells leaders whether the agent improves the chosen outcome, where it works best, which teams trust it, how much human oversight it needs, and whether the gain is large enough to justify adoption at scale.

That is the real prize. An RCT for hospital AI is not about slowing innovation down. It is how a hospital turns experimentation into dependable capability, one ward, one team, and one measured decision at a time.

[^1]: Liu X, Cruz Rivera S, Moher D, et al. *CONSORT AI extension*. Nature Medicine. 2020. Reporting guideline for clinical trial reports for interventions involving artificial intelligence.
[^2]: Cruz Rivera S, Liu X, Chan A W, et al. *SPIRIT AI extension*. Nature Medicine. 2020. Protocol guidance for trials of interventions involving artificial intelligence.
[^3]: The Stepped Wedge Clinical Trial. *JAMA Guide to Statistics and Methods*. Overview of stepped wedge cluster randomised design and reasons for its use.
[^4]: Zhang S, Cui W, Ding S, et al. *A cluster randomized controlled trial of a nurse led artificial intelligence assisted prevention and management for delirium*. PLOS One. 2024.
[^5]: Martindale APL, et al. *Concordance of randomised controlled trials for artificial intelligence interventions with the CONSORT AI reporting guidelines*. Nature Communications. 2024.
[^6]: Lukac PJ, Turner W, Vangala S, et al. *Ambient AI Scribes in Clinical Practice*. NEJM AI. 2025.
[^7]: Su B, et al. *Chatbot for patient education for prenatal aneuploidy testing*. Patient Education and Counseling. 2025.
[^8]: Choi KEA, Fitzek S. *User and Provider Experiences With Health Education Chatbots*. JMIR Human Factors. 2025.
[^9]: Stanceski K, et al. *The quality and safety of using generative AI to produce patient centred discharge instructions*. npj Digital Medicine. 2024.