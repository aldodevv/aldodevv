---
name: Industrial Brutalism & Tactical Telemetry
archetype: Tactical Telemetry & CRT Terminal
colors:
  background: "#0A0A0A"
  surface: "#121212"
  surface-hover: "#1A1A1A"
  border: "#262626"
  border-highlight: "#404040"
  text-primary: "#EAEAEA"
  text-muted: "#888888"
  accent-hazard: "#FF2A2A"
  accent-status: "#4AF626"
typography:
  macro:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    transform: "uppercase"
    tracking: "-0.04em"
    leading: "0.9"
    weights: "700, 800, 900"
  micro:
    fontFamily: "JetBrains Mono, monospace"
    transform: "uppercase"
    tracking: "0.08em"
    leading: "1.3"
    size: "10px - 14px"
geometry:
  radius: "0px"
  borderWidth: "1px"
  style: "Rigid modular grid, razor-thin dividing lines, ASCII framing, crosshair anchors"
---

## Overview

A rugged, mechanical digital interface fusing 1960s Swiss industrial blueprints with retro-futuristic aerospace and military telemetry terminals. Deliberately rejects soft consumer patterns in favor of uncompromising structural rigidity, high-density telemetry, and simulated analog display characteristics.

## Directives

1. **Absolute Zero Radius**: `border-radius: 0px` globally. Every container, button, and indicator is strictly 90-degree orthogonal.
2. **Monochrome Dominance with Singular Hazard Accent**: Dark CRT substrate (`#0A0A0A`), phosphor white text (`#EAEAEA`), with `#FF2A2A` reserved for vital notices, highlights, and structural alerts. `#4AF626` strictly for active telemetry status.
3. **Grid Determinism**: Built with mathematically precise 1px dividing lines (`gap: 1px` over `#262626` grid track borders).
4. **Telemetry Micro-Syntax**: ASCII brackets `[ SYS // 01 ]`, crosshair coordinates `+`, warning chevrons `///`, and technical designation codes.
