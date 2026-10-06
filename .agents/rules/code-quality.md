# Antigravity & Gemini Code Quality Guidelines

## 1. Up-to-Date Documentation First (Anti-Hallucination)
- Whenever working with third-party libraries, frameworks, SDKs, or cloud services, **query Context7 MCP** or fetch authoritative documentation rather than guessing or using deprecated syntax.
- Adhere strictly to the project's installed package versions.

## 2. Less Code & Minimal Boilerplate (YAGNI)
- Write concise, pragmatic, and idiomatic code. Avoid unnecessary abstractions, premature design patterns, and bloated boilerplate.
- Use single contiguous chunk replacements when modifying code. Avoid rewriting entire files when changing small sections.

## 3. Strict Quality & Verification Gate
- No placeholder functions or unfinished TODO mocks unless explicitly requested.
- Maintain strict type safety across all languages (TypeScript, Dart, Python).
- Always verify code using static checks (`rtk dart analyze`, `rtk tsc`, `rtk lint`, `rtk pytest`) before concluding a task.

## 4. Token & Context Efficiency
- Always use `rtk <cmd>` for shell commands to compress output by 60-90%.
- Respect `.agentignore` and do not read build artifacts, caches, or lockfiles into context.
