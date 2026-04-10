---
title: "AWS Agentic Services Map: A Practical Guide to Agents, AgentCore, and the Surrounding Stack"
date: "2026-02-26"
hero: "/blog/aws-agentic-services-map-hero.jpg"
tags: ["AI Strategy", "Agentic AI"]
description: "A practical guide to AWS agentic services in 2026 — mapping Bedrock agents, AgentCore, and the surrounding infrastructure stack for teams building production AI on AWS."
---

## If you are trying to understand AWS agentic services in 2026, the key is to separate **agent building**, **agent runtime infrastructure**, and **agent governance/data plumbing**.

At a high level, AWS now offers a coherent stack centered on Amazon Bedrock Agents and Amazon Bedrock AgentCore, with adjacent services for orchestration, retrieval, and safety.[^bedrock-agents][^agentcore-overview]

<div class="quote">"Amazon Bedrock AgentCore is an agentic platform to build, deploy and operate highly capable agents securely at scale."</div>

## The AWS Agentic Service Landscape (What matters most)

| Layer | AWS service/capability | What it does | When to use it |
|---|---|---|---|
| Agent application layer | **Amazon Bedrock Agents** | Builds agents that plan and execute multi-step tasks using models, APIs, and enterprise data | You want managed agent orchestration with fast setup |
| Multi-agent coordination | **Bedrock Multi-agent Collaboration** | Coordinates specialist agents under a supervisor agent | You need role-specialized agent teams for complex workflows |
| Agent runtime platform | **Amazon Bedrock AgentCore** | Production platform to deploy/operate agents with security, identity, memory, gateway, and observability controls | You need production-grade operations, not only prototype agents |
| Retrieval and grounding | **Amazon Bedrock Knowledge Bases** | Managed RAG with ingestion, retrieval APIs, source attribution, and structured/unstructured support | Your agents need grounded answers from enterprise data |
| Workflow composition | **Amazon Bedrock Flows** | Visual workflow builder linking prompts, agents, knowledge bases, and AWS services | You want explicit, auditable multi-step GenAI flows |
| Safety and policy | **Amazon Bedrock Guardrails** | Configurable safeguards (moderation, PII, prompt-attack protection, grounding checks) across models and workflows | You need policy-aligned behavior and safer outputs |
| Ecosystem procurement | **AI Agents & Tools in AWS Marketplace** | Catalog to discover and procure partner agents/tools, including MCP/A2A-aware offerings | You want faster buy/build hybrid delivery |

AWS added Bedrock multi-agent collaboration in March 2025 and launched AI agents/tools in AWS Marketplace in July 2025, which accelerated both build and buy paths for agent programs.[^multi-agent-ga][^marketplace-agents]

## AgentCore: The new center of gravity for production

AgentCore entered preview on **July 16, 2025** and became generally available on **October 13, 2025**.[^agentcore-preview][^agentcore-ga]

AWS positions it as modular services you can adopt independently:

- **Runtime**: serverless execution for agents/tools, including long-running workloads
- **Gateway**: tool connectivity and discovery, including MCP connectivity and API/Lambda transformation
- **Policy (Preview)**: real-time policy enforcement integrated with Gateway
- **Evaluations (Preview)**: live interaction scoring and quality monitoring
- **Identity**: agent authN/authZ for AWS and third-party systems
- **Memory**: persistent agent memory handling
- **Observability**: CloudWatch/OTel-compatible tracing and metrics
- **Browser**: secure browser runtime for web actions
- **Code Interpreter**: sandboxed code execution for agent tasks[^agentcore-overview][^agentcore-ga]

This matters because Bedrock Agents helps you build agent behavior, while AgentCore helps you run that behavior reliably in production.

## How Bedrock Agents and AgentCore fit together

A practical mental model:

1. **Bedrock Agents** defines how the agent reasons, plans, and invokes actions.[^bedrock-agents][^agents-ga]
2. **Knowledge Bases** provides grounded context and citations for retrieval-heavy tasks.[^knowledge-bases]
3. **Guardrails** enforces safety and policy constraints across model and workflow steps.[^guardrails]
4. **Flows** composes larger multi-step paths around prompts, agents, and services.[^bedrock-flows]
5. **AgentCore** hardens runtime operations (identity, memory, gateway, observability, runtime isolation).[^agentcore-overview][^agentcore-ga]

If your team is moving from PoC to production, this sequence avoids the common trap of building clever demos without operational controls.

## What is actually "agentic" in AWS today

If we define "agentic services" as AWS offerings directly intended to build, coordinate, secure, or operate autonomous/semi-autonomous agent workflows, the core list is:

1. Amazon Bedrock Agents
2. Bedrock Multi-agent Collaboration
3. Amazon Bedrock AgentCore (Runtime, Gateway, Policy, Evaluations, Identity, Memory, Observability, Browser, Code Interpreter)
4. Amazon Bedrock Knowledge Bases
5. Amazon Bedrock Flows
6. Amazon Bedrock Guardrails
7. AI Agents and Tools in AWS Marketplace

That is the clearest current map for architecture and investment decisions as of **February 26, 2026**.

## Executive summary

AWS now has a full agent stack, not just a single "agent" feature.

- **Build behavior** with Bedrock Agents
- **Coordinate specialists** with multi-agent collaboration
- **Ground responses** with Knowledge Bases
- **Compose workflows** with Flows
- **Enforce safety** with Guardrails
- **Run at scale** with AgentCore
- **Extend quickly** through Marketplace agent/tool offerings

For most enterprises, AgentCore plus Bedrock Agents is the critical boundary between pilot velocity and production reliability.

[^bedrock-agents]: Amazon Bedrock Agents. https://aws.amazon.com/bedrock/agents/
[^agents-ga]: AWS News Blog. "Agents for Amazon Bedrock is now available with improved control of orchestration and visibility into reasoning" (Nov 28, 2023). https://aws.amazon.com/blogs/aws/agents-for-amazon-bedrock-is-now-available-with-improved-control-of-orchestration-and-visibility-into-reasoning/
[^multi-agent-ga]: AWS What's New. "Amazon Bedrock now supports multi-agent collaboration" (Mar 10, 2025). https://aws.amazon.com/about-aws/whats-new/2025/03/amazon-bedrock-multi-agent-collaboration/
[^agentcore-overview]: Amazon Bedrock AgentCore overview. https://aws.amazon.com/bedrock/agentcore/
[^agentcore-preview]: AWS What's New. "Amazon Bedrock AgentCore now available in preview" (Jul 16, 2025). https://aws.amazon.com/about-aws/whats-new/2025/07/amazon-bedrock-agentcore-preview/
[^agentcore-ga]: AWS What's New. "Amazon Bedrock AgentCore is now generally available" (Oct 13, 2025). https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-bedrock-agentcore-available/
[^knowledge-bases]: Amazon Bedrock Knowledge Bases. https://aws.amazon.com/bedrock/knowledge-bases/
[^bedrock-flows]: AWS What's New. "Amazon Bedrock Flows is now generally available with two new capabilities" (Nov 22, 2024). https://aws.amazon.com/about-aws/whats-new/2024/11/amazon-bedrock-flows-new-capabilities/
[^guardrails]: Amazon Bedrock Guardrails. https://aws.amazon.com/bedrock/guardrails/
[^marketplace-agents]: AWS What's New. "Introducing AI agents and tools in AWS Marketplace" (Jul 16, 2025). https://aws.amazon.com/about-aws/whats-new/2025/07/ai-agents-tools-aws-marketplace/
