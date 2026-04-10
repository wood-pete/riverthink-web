---
title: "The OWASP GenAI Security Project: The Community That Is Setting the Standard for Secure AI"
date: "2026-02-26"
hero: "/blog/owasp-genai-security-project-critical-role-hero.jpg"
tags: ["Security", "Safety"]
description: "The OWASP GenAI Security Project is setting the community standard for secure AI. Why its frameworks matter for every enterprise deploying LLMs and agents in regulated environments."
---

## Artificial intelligence is moving from experimentation into critical infrastructure. Boards are asking whether their organisations are safe. Regulators are starting to catch up. And yet, for most enterprises, the question of how to systematically evaluate and govern AI security risk still lacks a clear, authoritative answer.

The OWASP GenAI Security Project is the closest thing the industry has to one.

It is not a vendor product, a proprietary framework, or a compliance checkbox. It is an open, community-driven initiative that has become the most widely cited reference for LLM and generative AI security risk, used by security teams, architects, regulators, and AI builders across the world.[^owasp-flagship]

<div class="pullquote pullquote-right">
The OWASP GenAI Security Project went from a lab initiative to one of OWASP's only Flagship-status projects in under 18 months, driven by over 600 contributing experts from more than 18 countries.
</div>

For executives making decisions about AI adoption, governance, and risk tolerance, and for architects designing systems that depend on LLMs and agents, understanding this project is not optional. It is foundational.

---

## From Web Security to AI Security: A Brief History of OWASP

The Open Worldwide Application Security Project was founded on September 9, 2001, by Mark Curphey. The OWASP Foundation was formally incorporated as a United States non-profit on April 21, 2004.[^owasp-history]

Its founding mission was direct: make application security visible so that organisations and individuals could make informed decisions about real security risks. In a landscape where most security knowledge lived inside vendors, consultancies, and closed research groups, OWASP's open approach was radical.

The early tools included the OWASP Guide, a practical security handbook, and WebGoat, a deliberately vulnerable application used for training. But the resource that made OWASP a household name in security was the OWASP Top 10: a regularly updated, community-curated list of the most critical application security risks.

Over two decades, OWASP grew into the pre-eminent open-source foundation for application security, with more than 250 local chapters worldwide and thousands of contributors producing standards, tools, guides, and cheatsheets consumed globally.[^owasp-history]

In February 2023, the board voted to rename the organisation from the "Open Web Application Security Project" to the "Open Worldwide Application Security Project," reflecting that the scope had long since extended well beyond the web.[^owasp-history]

---

## The Birth of the GenAI Security Project

As large language models moved from research curiosity to enterprise deployment in 2023, it quickly became apparent that existing security frameworks did not adequately address the risks they introduced. Prompt injection, training data poisoning, model extraction, and excessive agent autonomy were not part of the standard threat model.

Steve Wilson, then of Contrast Security, launched the OWASP Top 10 for Large Language Model Applications in 2023 as a community response to this gap. What began as a small group of security professionals addressing an urgent need rapidly expanded. By 2024, the project had attracted more than 600 contributing experts from over 18 countries and nearly 8,000 active community members.[^owasp-launch]

<div class="quote">This is critical for anyone building AI systems to understand: the OWASP GenAI Security Project is not a list of theoretical problems. It is a living record of how real AI systems fail, and what to do about it.</div>

In March 2025, OWASP took the significant step of formally elevating the initiative: the Top 10 for LLM Applications became the OWASP GenAI Security Project, and it was promoted to Flagship status by vote of the Global Board of Directors.[^owasp-flagship] Flagship status is reserved for OWASP's most mature, active, and strategically important projects. The GenAI Security Project earned it in under 18 months.

The project now covers LLMs, agentic AI systems, red teaming, incident response, supply chain, data governance, and the full emerging landscape of AI-powered applications.

---

## Key Resources: What the Project Produces

The OWASP GenAI Security Project is a prolific producer of open, vendor-neutral guidance. The table below summarises the primary resources available as of early 2026, with direct links.

| Resource | Description | Link |
|---|---|---|
| **OWASP Top 10 for LLM Applications 2025** | The core risk taxonomy for LLM applications, covering the ten most critical vulnerability classes with mitigations | [View resource](https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/) |
| **OWASP Top 10 for Agentic Applications 2026** | The first globally peer-reviewed framework for autonomous and agentic AI security risks, developed with over 100 industry contributors | [View resource](https://genai.owasp.org/2025/12/09/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security/) |
| **GenAI Red Teaming Guide** | Practical methodology for adversarial evaluation of LLM and GenAI systems, covering model evaluation, implementation testing, infrastructure, and runtime behaviour | [View resource](https://genai.owasp.org/resource/genai-red-teaming-guide/) |
| **Vendor Evaluation Criteria for AI Red Teaming Providers & Tooling v1.0** | Criteria for assessing red teaming vendors and automated testing tools, from simple chatbots to advanced multi-agent and MCP architectures | [View resource](https://genai.owasp.org/resource/owasp-vendor-evaluation-criteria-for-ai-red-teaming-providers-tooling-v1-0/) |
| **Agentic AI Threats and Mitigations** | Comprehensive threat taxonomy for agentic systems with mitigation guidance, covering planning, tool use, memory, and multi-agent coordination | [View resource](https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/) |
| **Agentic AI Secure Development Guide** | Practical guidance for designing, building, and deploying secure agentic applications | [View resource](https://genai.owasp.org/initiatives/agentic-security-initiative/) |
| **GenAI Incident Response Guide** | Guidelines and best practices for responding to security incidents involving GenAI applications | [View resource](https://genai.owasp.org/resources/) |
| **State of Agentic AI Security and Governance** | A comprehensive landscape view of today's autonomous AI security and governance challenges | [View resource](https://genai.owasp.org/resources/) |
| **Solutions Reference Guide (Q2–Q3 2025)** | Vendor-agnostic reference for organisations securing LLM and Agentic AI applications | [View resource](https://genai.owasp.org/resource/owasp-genai-security-project-solutions-reference-guide-q2_q325/) |
| **AI Security Solutions Landscape** | A mapped view of the AI security product ecosystem aligned to the DevOps-SecOps intersection | [View resource](https://genai.owasp.org/resources/) |
| **OWASP AIBOM Generator** | Open-source tool for generating AI Bills of Materials (AI SBOMs) to improve AI supply chain transparency | [View resource](https://genai.owasp.org/resources/) |
| **A Practical Guide for Secure MCP Server Development** | Security guidance for teams building on the Model Context Protocol | [View resource](https://genai.owasp.org/resources/) |
| **FinBot Agentic Security CTF** | A Capture the Flag challenge for hands-on learning about agentic AI security | [View resource](https://genai.owasp.org/initiatives/agentic-security-initiative/) |

All resources are published under Creative Commons Attribution-ShareAlike v4.0 and available at [genai.owasp.org/resources](https://genai.owasp.org/resources/).[^owasp-resources]

---

## What Is Red Teaming — and Why Does It Matter for AI?

Red teaming is a concept with roots in military and national security practice. Historically, a "red team" was an independent group tasked with adopting the perspective of an adversary: to challenge assumptions, probe defences, and surface vulnerabilities that internal teams, anchored by familiarity bias, could not see.[^redteaming-origins]

In cybersecurity, red teaming evolved into structured adversarial simulation: systematically attacking systems before malicious actors do, using the same techniques and mindset as real threat actors.

<div class="pullquote pullquote-right">
"GenAI Red Teaming combines traditional adversarial testing with AI-specific methodologies, addressing risks like prompt injection, toxic outputs, model extraction, bias, knowledge risks, and hallucinations."
— OWASP GenAI Red Teaming Guide[^owasp-redteam]
</div>

For generative AI systems, red teaming takes on new dimensions. Traditional penetration testing looks for memory corruption, authentication bypass, and injection flaws in deterministic code. AI systems are probabilistic, context-sensitive, and instruction-following by design. Their attack surface includes inputs, system prompts, training data, retrieval pipelines, tool integrations, and the chain of automated decisions made by autonomous agents.

The OWASP GenAI Red Teaming Guide defines five threat categories that structured AI red teaming must address:

<details>
<summary>Adversarial Attacks</summary>
<div class="accordion-content">

Attempts to manipulate model behaviour through crafted inputs. The most prevalent form is **prompt injection**, where malicious content embedded in user input, retrieved documents, or tool responses overrides the model's intended instructions.

In agentic systems, successful prompt injection can redirect an agent's entire task plan, cause it to leak sensitive information, invoke unintended tools, or take actions with real-world consequences such as sending communications, modifying data, or escalating permissions.

Red teaming in this category tests whether the system resists direct injection, indirect injection through data sources, multi-turn manipulation, and role-playing exploits.

</div>
</details>

<details>
<summary>Alignment Risks</summary>
<div class="accordion-content">

Alignment failures occur when a model's outputs deviate from organisational values, policies, or safety requirements, even without an explicit attack. This includes generating harmful, biased, or ethically problematic content, inconsistently applying policy across different user populations or inputs, and following technically valid but unintended instructions that violate the spirit of the deployment.

Red teaming in this category probes edge cases in safety tuning, assesses consistency under adversarial framing, and evaluates whether the model's implicit values match the organisation's explicit requirements.

For executives, alignment failures represent reputational, legal, and compliance risk that may not surface through standard functional testing.

</div>
</details>

<details>
<summary>Data Risks</summary>
<div class="accordion-content">

AI systems can expose sensitive information through several mechanisms: training data memorisation, retrieval pipeline leakage, system prompt exposure, and excessive verbosity in responses.

In enterprise deployments, data risks extend to customer PII, intellectual property, confidential business logic encoded in system prompts, and the contents of internal knowledge bases used in retrieval-augmented generation.

Red teaming in this category tests for extraction of training data, retrieval of out-of-scope documents, and leakage of system configuration through adversarial prompting strategies.

</div>
</details>

<details>
<summary>Interaction Risks</summary>
<div class="accordion-content">

Interaction risks arise from the way users, models, and systems engage in real deployments: jailbreaking, social engineering of AI personas, multi-turn manipulation that gradually shifts model behaviour, and exploitation of role-playing or hypothetical framing to bypass guardrails.

In agentic contexts, interaction risks also include chain-of-thought manipulation, where an attacker poisons the reasoning steps an agent takes before arriving at a final action.

Red teaming in this category requires creative adversarial prompting, persona manipulation, and evaluation of whether guardrails hold under sustained pressure across multi-turn conversations.

</div>
</details>

<details>
<summary>Knowledge Risks</summary>
<div class="accordion-content">

Knowledge risks cover the accuracy, currency, and reliability of the information an AI system produces or retrieves. This includes hallucination, misinformation generation, confident assertion of incorrect facts, and the potential for AI outputs to propagate errors at machine speed in automated workflows.

For agentic systems making decisions autonomously, knowledge risks can translate directly into operational failures: incorrect data written to databases, erroneous decisions communicated to customers, or flawed analysis driving executive decisions.

Red teaming in this category evaluates factual reliability, RAG retrieval quality under adversarial document injection, and the system's capacity to express uncertainty rather than confabulate.

</div>
</details>

<div class="quote">Red teaming is not a one-time audit. It is a continuous practice that must evolve as models, architectures, and threat landscapes change. The OWASP framework provides the methodology to make it systematic.</div>

The OWASP Red Teaming Guide is structured around four evaluation domains: model evaluation, implementation testing, infrastructure assessment, and runtime behaviour analysis. Together, these cover the full stack from the model itself to the operational environment in which it runs.[^owasp-redteam]

---

## The Active Initiatives: Where the Work Happens

Beyond published documents, the OWASP GenAI Security Project runs several active initiatives that produce ongoing research, tooling, and community engagement.

<details>
<summary>Agentic Security Initiative (ASI)</summary>
<div class="accordion-content">

The Agentic Security Initiative is the project's most active research programme, addressing the security implications of autonomous AI systems: agents that plan, use tools, access memory, delegate tasks, and operate without continuous human supervision.

The ASI has produced the Agentic AI Threats and Mitigations taxonomy, the Secure Agentic Development Guide, the State of Agentic AI Security and Governance report, the OWASP Top 10 for Agentic Applications, and the FinBot CTF challenge. It is directly relevant to any organisation building or deploying AI agents in production.

</div>
</details>

<details>
<summary>Red Teaming Initiative</summary>
<div class="accordion-content">

This initiative develops and maintains standardised red teaming methodology for AI systems. It produces benchmarks, testing frameworks, and evaluation criteria, and it published both the GenAI Red Teaming Guide and the Vendor Evaluation Criteria for AI Red Teaming Providers.

The initiative is specifically designed to help organisations avoid the trap of superficial "jailbreak-only" testing and establish a rigorous, full-spectrum adversarial evaluation practice.

</div>
</details>

<details>
<summary>AI Supply Chain and AIBOM</summary>
<div class="accordion-content">

The OWASP AIBOM Generator addresses a growing concern in enterprise AI governance: the opacity of AI system dependencies. Just as Software Bills of Materials (SBOMs) became a compliance and security standard for software supply chains, AI Bills of Materials (AIBOMs) aim to provide transparency into the models, datasets, fine-tuning pipelines, and plugins that constitute an AI system.

This initiative is particularly relevant for regulated industries where provenance, auditability, and third-party risk management are compliance requirements.

</div>
</details>

---

## Why This Matters: An Executive and Architecture Perspective

The OWASP GenAI Security Project is not a technical curiosity. It is a governance instrument.

For executives, it provides:

- **A shared risk language** that can be used consistently across engineering, security, legal, and risk management
- **A baseline** against which to assess vendor claims, system designs, and third-party AI integrations
- **Alignment with emerging regulation**, as regulators and standards bodies increasingly reference OWASP frameworks in AI governance guidance
- **A due diligence record** — having demonstrably mapped your AI systems against an open, peer-reviewed framework is increasingly expected in board reporting and risk assessment

For architects, it provides:

- **Threat models** that account for the full attack surface of LLM and agentic systems, including surfaces that traditional threat modelling misses
- **Mitigation patterns** for prompt injection, excessive agency, supply chain risk, and retrieval pipeline weaknesses
- **Red teaming methodology** to validate that security controls work under adversarial conditions
- **Agentic-specific guidance** for systems with autonomous planning, tool use, and multi-agent coordination

<div class="quote">The organisations that are ahead on AI security are not necessarily those with the largest security budgets. They are those that started with the right frameworks early and applied them consistently across architecture, development, and operations.</div>

---

## Where to Start

The most effective starting point depends on where your organisation sits today.

| Your current stage | Recommended entry point |
|---|---|
| Early AI adoption, limited security review | OWASP Top 10 for LLM Applications 2025 |
| Deploying or planning AI agents | OWASP Top 10 for Agentic Applications 2026 + Agentic AI Threats and Mitigations |
| Evaluating AI security posture | GenAI Red Teaming Guide + Vendor Evaluation Criteria |
| Building an AI governance programme | Solutions Reference Guide + State of Agentic AI Security and Governance |
| Developing on MCP or multi-agent frameworks | Secure MCP Development Guide + Agentic Security Development Guide |

The full resource library is at [genai.owasp.org/resources](https://genai.owasp.org/resources/). All materials are free, open, and vendor-neutral.

---

[^owasp-flagship]: OWASP Foundation. "OWASP Promotes GenAI Security Project to Flagship Status." March 26, 2025. https://genai.owasp.org/2025/03/26/project-owasp-promotes-genai-security-project-to-flagship-status/

[^owasp-history]: OWASP Foundation. "About the OWASP Foundation." https://owasp.org/about/ See also: Wikipedia. "OWASP." https://en.wikipedia.org/wiki/OWASP

[^owasp-launch]: OWASP Foundation. "OWASP Top 10 for Large Language Model Applications." https://owasp.org/www-project-top-10-for-large-language-model-applications/

[^owasp-redteam]: OWASP GenAI Security Project. "GenAI Red Teaming Guide." January 2025. https://genai.owasp.org/resource/genai-red-teaming-guide/

[^owasp-resources]: OWASP GenAI Security Project. "Resources Archive." https://genai.owasp.org/resources/

[^owasp-agentic]: OWASP GenAI Security Project. "OWASP Top 10 for Agentic Applications 2026." December 2025. https://genai.owasp.org/2025/12/09/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security/

[^owasp-asi]: OWASP GenAI Security Project. "Agentic Security Initiative." https://genai.owasp.org/initiatives/agentic-security-initiative/

[^redteaming-origins]: RAND Corporation. "Red Teaming: The Art of Challenging Assumptions." https://www.rand.org/pubs/perspectives/PE198.html
